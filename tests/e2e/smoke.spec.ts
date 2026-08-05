import { test, expect } from '@playwright/test'

test('homepage loads and shows hero', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toBeVisible()
})

test('services page loads', async ({ page }) => {
  await page.goto('/services')
  await expect(page.locator('h1')).toBeVisible()
})

test('booking page loads', async ({ page }) => {
  await page.goto('/booking')
  await expect(page.locator('h1')).toBeVisible()
})

test('navigation works', async ({ page }) => {
  await page.goto('/')
  await page.click('a[href="/services"]')
  await expect(page).toHaveURL(/\/services/)
})
