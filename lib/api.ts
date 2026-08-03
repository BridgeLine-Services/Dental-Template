// ============================================================
// Base44 Backend API Client
// Centralized client for all Base44 backend function calls.
// ============================================================

const BASE_URL = "https://app.base44.com/api/apps/6a57e26859533eb5e679dee8/functions";

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface AvailabilityResponse {
  success: boolean;
  date: string;
  dentistId: string;
  availableSlots: string[];
  bookedSlots: string[];
  totalSlots: number;
}

export interface BookingResponse {
  success: boolean;
  appointmentId: string;
  message: string;
  appointment?: any;
}

export interface DashboardStats {
  totalAppointments: number;
  todaysAppointments: number;
  pendingAppointments: number;
  confirmedAppointments: number;
  completedAppointments: number;
  cancelledAppointments: number;
  totalPatients: number;
  newPatients: number;
  totalProviders: number;
  totalServices: number;
  totalBlogPosts: number;
  publishedBlogPosts: number;
  totalReviews: number;
  pendingReviews: number;
  approvedReviews: number;
  avgRating: number;
  newMessages: number;
  totalMessages: number;
}

async function callFunction<T = any>(name: string, body?: any): Promise<T> {
  const res = await fetch(`${BASE_URL}/${name}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

export const api = {
  checkAvailability: (dentistId: string, date: string, serviceSlug?: string) =>
    callFunction<AvailabilityResponse>("checkAvailability", { dentistId, date, serviceSlug }),

  bookAppointment: (data: {
    patientName: string;
    patientEmail: string;
    patientPhone: string;
    dentistId: string;
    dentistName: string;
    serviceSlug: string;
    serviceName: string;
    date: string;
    time: string;
    isNewPatient?: boolean;
    insuranceProvider?: string;
    notes?: string;
  }) => callFunction<BookingResponse>("bookAppointment", data),

  submitContactForm: (data: { name: string; email: string; phone?: string; subject?: string; message: string }) =>
    callFunction<ApiResponse>("submitContactForm", data),

  submitReview: (data: { author: string; rating: number; text: string; treatment?: string; dentistId?: string; patientId?: string }) =>
    callFunction<ApiResponse>("submitReview", data),

  newsletterSignup: (data: { email: string; name?: string; source?: string }) =>
    callFunction<ApiResponse>("newsletterSignup", data),

  getDashboardStats: () => callFunction<{ success: boolean; stats: DashboardStats; recentAppointments: any[] }>("getDashboardStats"),

  verifyInsurance: (data: { providerName?: string; patientName?: string; patientEmail?: string; patientId?: string }) =>
    callFunction<ApiResponse>("verifyInsurance", data),

  submitPatientForm: (data: { patientName: string; patientEmail?: string; patientPhone?: string; formData: any; formType: string; signature?: string }) =>
    callFunction<ApiResponse>("submitPatientForm", data),

  getSiteData: () => callFunction<{ success: boolean; data: any }>("getSiteData"),
};
