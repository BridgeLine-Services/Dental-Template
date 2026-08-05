// Financing calculation utilities for dental payment plans

export function calculateMonthlyPayment(principal: number, annualRate: number, months: number): number {
  if (months <= 0) return principal
  if (annualRate === 0) return principal / months
  const monthlyRate = annualRate / 12 / 100
  const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
  return Math.round(payment * 100) / 100
}

export function getTotalCost(principal: number, annualRate: number, months: number): number {
  return Math.round(calculateMonthlyPayment(principal, annualRate, months) * months * 100) / 100
}

export function getTotalInterest(principal: number, annualRate: number, months: number): number {
  return Math.round((getTotalCost(principal, annualRate, months) - principal) * 100) / 100
}

export function getCareCreditTerms(amount: number) {
  // CareCredit: 6 months no interest if paid in full, otherwise 14.9% APR
  const noInterestThreshold = 200
  return {
    provider: 'CareCredit',
    options: [
      { months: 6, apr: 0, monthly: amount / 6, total: amount, interest: 0, note: 'No interest if paid in full within 6 months' },
      { months: 12, apr: 14.9, monthly: calculateMonthlyPayment(amount, 14.9, 12), total: getTotalCost(amount, 14.9, 12), interest: getTotalInterest(amount, 14.9, 12), note: '14.9% APR for 12 months' },
      { months: 24, apr: 14.9, monthly: calculateMonthlyPayment(amount, 14.9, 24), total: getTotalCost(amount, 14.9, 24), interest: getTotalInterest(amount, 14.9, 24), note: '14.9% APR for 24 months' },
    ],
    eligibility: amount >= noInterestThreshold ? 'Eligible for promotional financing' : 'Minimum purchase $200 for promotional terms',
    applyUrl: 'https://www.carecredit.com/apply/',
  }
}

export function getCherryEstimate(amount: number) {
  // Cherry: 0-35% APR based on credit, typically 3/6/12 month plans
  const typicalAPR = 15.9
  return {
    provider: 'Cherry',
    options: [
      { months: 3, apr: typicalAPR, monthly: calculateMonthlyPayment(amount, typicalAPR, 3), total: getTotalCost(amount, typicalAPR, 3), interest: getTotalInterest(amount, typicalAPR, 3) },
      { months: 6, apr: typicalAPR, monthly: calculateMonthlyPayment(amount, typicalAPR, 6), total: getTotalCost(amount, typicalAPR, 6), interest: getTotalInterest(amount, typicalAPR, 6) },
      { months: 12, apr: typicalAPR, monthly: calculateMonthlyPayment(amount, typicalAPR, 12), total: getTotalCost(amount, typicalAPR, 12), interest: getTotalInterest(amount, typicalAPR, 12) },
    ],
    aprRange: '0% - 35% based on credit',
    applyUrl: 'https://offers.cherrytechnologies.com/',
  }
}

export function getSunbitEstimate(amount: number) {
  // Sunbit: 0-30% APR, 3/6/12 month plans
  const typicalAPR = 12.9
  return {
    provider: 'Sunbit',
    options: [
      { months: 3, apr: typicalAPR, monthly: calculateMonthlyPayment(amount, typicalAPR, 3), total: getTotalCost(amount, typicalAPR, 3), interest: getTotalInterest(amount, typicalAPR, 3) },
      { months: 6, apr: typicalAPR, monthly: calculateMonthlyPayment(amount, typicalAPR, 6), total: getTotalCost(amount, typicalAPR, 6), interest: getTotalInterest(amount, typicalAPR, 6) },
      { months: 12, apr: typicalAPR, monthly: calculateMonthlyPayment(amount, typicalAPR, 12), total: getTotalCost(amount, typicalAPR, 12), interest: getTotalInterest(amount, typicalAPR, 12) },
    ],
    aprRange: '0% - 30% based on credit',
    applyUrl: 'https://www.sunbit.com/apply',
  }
}

export function getAllFinancingOptions(amount: number) {
  return {
    amount,
    options: [
      getCareCreditTerms(amount),
      getCherryEstimate(amount),
      getSunbitEstimate(amount),
    ],
    hsaFsa: {
      eligible: true,
      note: 'HSA and FSA cards accepted for most dental procedures',
    },
    paymentPlan: {
      available: amount >= 500,
      terms: 'Custom payment plans available for amounts over $500. Contact our office for details.',
    },
  }
}
