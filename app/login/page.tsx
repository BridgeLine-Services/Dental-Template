'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import { ShieldAlert, Key, Mail, Lock, Loader2, ArrowRight, Home } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate Portal login request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
    } catch (err) {
      setError('Invalid patient credentials. Check spelling and retry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link href="/" className="inline-flex text-brand-600 font-extrabold text-2xl tracking-tight mb-4 hover:opacity-90">
          ✨ {siteConfig.name}
        </Link>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Patient Portal Login</h2>
        <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
          Access secure billing charts, prescription archives, clinical notes, and post-operative recovery guides.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-3xl sm:px-10 border border-slate-100 space-y-6">
          
          {success ? (
            <div className="space-y-4 py-8 text-center">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">✓</div>
              <h3 className="text-xl font-bold text-slate-900">Secure Access Granted</h3>
              <p className="text-sm text-slate-500">Redirecting you to your active dental files...</p>
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center text-brand-600 font-semibold text-sm hover:underline"
                >
                  <Home className="w-4 h-4 mr-1.5" /> Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-800"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-800"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Remember me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-slate-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-xs font-semibold text-slate-500 cursor-pointer">
                    Remember me
                  </label>
                </div>

                <div className="text-xs">
                  <a href="#" onClick={(e) => { e.preventDefault(); alert("Verification code initiated via SMS.") }} className="font-semibold text-brand-600 hover:text-brand-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Error Box */}
              {error && (
                <div className="bg-red-50 text-red-700 text-xs px-4 py-2.5 rounded-xl border border-red-100 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center px-4 py-3.5 border border-transparent text-sm font-bold rounded-xl text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors shadow-sm disabled:bg-slate-200 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-1.5 animate-spin" />
                    Verifying Credentials...
                  </>
                ) : (
                  'Sign In to Portal'
                )}
              </button>

            </form>
          )}

          {/* Create Account Link */}
          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <span className="text-xs text-slate-400">First time using the portal?</span>{' '}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert("Intake registration portal requires validation via phone. Please contact our office to establish active portal profiles.") }}
              className="text-xs font-bold text-brand-600 hover:underline inline-flex items-center gap-0.5"
            >
              Establish Account <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}
