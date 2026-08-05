import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const pages = ['/', '/services', '/booking', '/contact', '/faq']

for (const path of pages) {
  test(`${path} should not have a11y violations`, async ({ page }) => {
    await page.goto(path)
    const results = await new AxeBuilder({ page }).analyze()
    expect(results.violations.filter(v => v.impact === 'critical' || v.impact === 'serious')).toEqual([])
  })
}
