// Shared TypeScript types for the dental application

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T = any> {
  success: boolean
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasMore: boolean
  }
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface BreadcrumbItem {
  label: string
  href: string
}

export interface ServiceCategory {
  name: string
  slug: string
  services: string[]
}

export interface TimeSlot {
  time: string
  available: boolean
  dentistId?: string
  dentistName?: string
}

export interface DashboardStats {
  totalAppointments: number
  upcomingAppointments: number
  totalPatients: number
  totalRevenue: number
  avgRating: number
  pendingReviews: number
  unreadMessages: number
  activeOffers: number
}

export interface NotificationPreferences {
  emailReminders: boolean
  smsReminders: boolean
  marketingEmails: boolean
  newsletter: boolean
  reviewRequests: boolean
  appointmentConfirmations: boolean
}
