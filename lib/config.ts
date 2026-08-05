// Central site configuration — update this to customize for any dental practice

export const siteConfig = {
  name: 'Bright Smile Dental',
  shortName: 'BSD',
  tagline: 'Your Smile is Our Priority',
  description: 'Comprehensive dental care for the whole family. Cosmetic, restorative, and emergency dentistry services.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://brightsmiledental.com',
  email: 'info@brightsmiledental.com',
  phone: '(555) 123-4567',
  emergencyPhone: '(555) 911-0000',
  address: {
    street: '123 Smile Avenue',
    city: 'Springfield',
    state: 'CA',
    zip: '90210',
  },
  geo: {
    lat: 34.0522,
    lng: -118.2437,
  },
  hours: [
    { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 3:00 PM' },
    { day: 'Saturday', hours: 'By appointment' },
    { day: 'Sunday', hours: 'Emergency only' },
  ],
  social: {
    facebook: 'https://facebook.com/brightsmiledental',
    twitter: 'https://twitter.com/brightsmile',
    instagram: 'https://instagram.com/brightsmiledental',
    linkedin: 'https://linkedin.com/company/bright-smile-dental',
    youtube: 'https://youtube.com/@brightsmiledental',
  },
  locations: [
    {
      name: 'Main Office',
      address: '123 Smile Avenue, Springfield, CA 90210',
      phone: '(555) 123-4567',
      hours: 'Mon-Fri 9am-5pm, Sat by appointment',
    },
    {
      name: 'Westside Branch',
      address: '456 Dental Drive, Westside, CA 90211',
      phone: '(555) 123-4568',
      hours: 'Mon-Fri 10am-6pm, Sat by appointment',
    },
  ],
  payment: {
    acceptInsurance: true,
    paymentMethods: ['Stripe', 'CareCredit', 'Cherry', 'Sunbit', 'HSA', 'FSA'],
    financingAvailable: true,
    membershipPlans: true,
  },
  features: {
    onlineBooking: true,
    telehealth: true,
    emergencyServices: true,
    pediatricDentistry: true,
    sedationDentistry: true,
    aiReceptionist: true,
    onlineCheckIn: true,
    referralProgram: true,
    membershipPlans: true,
    waitlist: true,
  },
  compliance: {
    hipaaCompliant: true,
    hipaaNoticeUrl: '/hipaa-notice',
    privacyPolicyUrl: '/privacy-policy',
    termsUrl: '/terms',
    accessibilityStatementUrl: '/legal/accessibility',
    cookiePolicyUrl: '/legal/cookie-policy',
    dataRetentionUrl: '/legal/data-retention',
    aiDisclosureUrl: '/legal/ai-disclosure',
  },
}

export default siteConfig
