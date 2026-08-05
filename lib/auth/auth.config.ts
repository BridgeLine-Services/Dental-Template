import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/db/prisma'
import { loginSchema } from '@/lib/validation/schemas'

export const authConfig: NextAuthConfig = {
  trustHost: true,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 60, // 30 minutes — HIPAA automatic logout
    updateAge: 15 * 60, // Update session every 15 min
  },
  jwt: {
    maxAge: 30 * 60,
  },
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
  },
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      async authorize(creds) {
        const parsed = loginSchema.safeParse(creds)
        if (!parsed.success) return null

        const user = await prisma.user.findUnique({
          where: { email: parsed.data.email.toLowerCase() },
        })
        if (!user || !user.passwordHash) return null

        const valid = await bcrypt.compare(parsed.data.password, user.passwordHash)
        if (!valid) return null

        // Update last login
        await prisma.user.update({
          where: { id: user.id },
          data: { lastLoginAt: new Date() },
        })

        return {
          id: user.id,
          email: user.email,
          name: user.name ?? undefined,
          role: user.role,
        }
      },
    }),
    ...(process.env.GOOGLE_CLIENT_ID ? [Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })] : []),
  ],
  callbacks: {
    authorized: ({ auth, request }) => {
      const path = request.nextUrl.pathname
      const isAdmin = auth?.user?.role && ['SUPER_ADMIN', 'ADMIN'].includes(auth.user.role as string)
      const isStaff = auth?.user?.role && ['SUPER_ADMIN', 'ADMIN', 'DENTIST', 'HYGIENIST', 'RECEPTIONIST'].includes(auth.user.role as string)
      const isLoggedIn = !!auth?.user

      // Protect admin routes
      if (path.startsWith('/admin') && !isAdmin) return false
      // Protect portal routes
      if (path.startsWith('/portal') && !isLoggedIn) return false
      // Redirect logged-in users away from login
      if (path === '/login' && isLoggedIn) {
        return Response.redirect(new URL('/portal', request.nextUrl))
      }
      return true
    },
    async jwt({ token, user, trigger }) {
      if (user) {
        token.role = (user as any).role
        token.id = (user as any).id
      }
      // Re-fetch role on session update (handles role changes)
      if (trigger === 'update') {
        const dbUser = await prisma.user.findUnique({ where: { id: token.id as string } })
        if (dbUser) token.role = dbUser.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as any
      }
      return session
    },
  },
}
