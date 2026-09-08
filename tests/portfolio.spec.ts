import { test, expect } from '@playwright/test'

test('editorial emphasis uses the loaded serif font rather than the body font', async ({ page }) => {
  await page.goto('/')
  const fonts = await page.evaluate(() => ({
    emphasis: getComputedStyle(document.querySelector('h1 em')!).fontFamily,
    body: getComputedStyle(document.body).fontFamily,
  }))
  expect(fonts.emphasis).not.toBe(fonts.body)
  expect(fonts.emphasis).toMatch(/Instrument/i)
})

test('pages provide canonical URLs and a working social preview image', async ({ page, request }) => {
  await page.goto('/')
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://personal-website-imronbek.vercel.app')
  const image = await page.locator('meta[property="og:image"]').getAttribute('content')
  expect(image).toContain('/opengraph-image')
  const response = await request.get(new URL(image!).pathname)
  expect(response.status()).toBe(200)
  expect(response.headers()['content-type']).toContain('image/png')
  await page.goto('/work/ttlk-virtual-try-on')
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://personal-website-imronbek.vercel.app/work/ttlk-virtual-try-on')
  await expect(page).toHaveTitle('TTLK Smart Sizing and Virtual Try-On | Imronbek Abduvaliev')
})

test('mobile navigation closes with Escape and returns focus to its toggle', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const toggle = page.getByRole('button', { name: 'Open navigation' })
  await toggle.click()
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible()
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Selected work' }).focus()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeHidden()
  await expect(toggle).toBeFocused()
})

test('visitors can open a real project case study and return to selected work', async ({ page }) => {
  await page.goto('/')
  const project = page.locator('#projects').getByRole('link', { name: 'Read case study: Barbershop Booking Platform', exact: true })
  await expect(project).toBeVisible()
  await project.click()
  await expect(page).toHaveURL(/\/work\/barbershop-booking/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Barbershop Booking Platform')
  await expect(page.getByRole('heading', { name: 'The challenge' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'What I built' })).toBeVisible()
  await page.getByRole('link', { name: 'Back to selected work' }).click()
  await expect(page).toHaveURL(/\/#projects$/)
})
