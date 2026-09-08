import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const routes = ['/', '/work/barbershop-booking', '/work/ttlk-virtual-try-on', '/work/lab-data-workflows']

for (const route of routes) {
  test(`${route} is accessible and has no horizontal overflow or browser errors`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    const response = await page.goto(route)
    expect(response?.status()).toBe(200)
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    const scan = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
    expect(scan.violations).toEqual([])
    expect(errors).toEqual([])
  })
}

test('skip link moves keyboard focus to the content', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
})

test('project content and contact links work without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL })
  const page = await context.newPage()
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Built for real life.' })).toBeVisible()
  await page.getByRole('link', { name: 'Read case study: Barbershop Booking Platform', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'What I built' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Ask me about this project' })).toHaveAttribute('href', 'mailto:abduvaliev@arizona.edu')
  await context.close()
})

test('reduced motion preference disables smooth scrolling and transitions', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const styles = await page.evaluate(() => ({
    scroll: getComputedStyle(document.documentElement).scrollBehavior,
    transition: getComputedStyle(document.querySelector('.button')!).transitionDuration,
    animations: document.getAnimations().filter((animation) => animation.playState === 'running').length,
  }))
  expect(styles).toEqual({ scroll: 'auto', transition: '0s', animations: 0 })
})

test('mobile navigation links close the menu and navigate to the chosen section', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.getByRole('button', { name: 'Open navigation' }).click()
  const nav = page.getByRole('navigation', { name: 'Mobile navigation' })
  await nav.getByRole('link', { name: 'Selected work' }).click()
  await expect(nav).toBeHidden()
  await expect(page).toHaveURL(/#projects$/)
})

test('résumé, sitemap, robots and missing project routes return the expected responses', async ({ request }) => {
  const resume = await request.get('/resume-imronbek-abduvaliev.pdf')
  expect(resume.status()).toBe(200)
  expect(resume.headers()['content-type']).toContain('application/pdf')
  const sitemap = await request.get('/sitemap.xml')
  expect(sitemap.status()).toBe(200)
  expect(await sitemap.text()).toContain('/work/barbershop-booking')
  const robots = await request.get('/robots.txt')
  expect(await robots.text()).toContain('https://personal-website-imronbek.vercel.app/sitemap.xml')
  expect((await request.get('/work/not-a-project')).status()).toBe(404)
})

test('small screens keep content and controls within the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 })
  await page.goto('/')
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  const target = await page.getByRole('button', { name: 'Open navigation' }).boundingBox()
  expect(target!.height).toBeGreaterThanOrEqual(44)
  expect(target!.width).toBeGreaterThanOrEqual(44)
})

test('capture the rendered design', async ({ page }, testInfo) => {
  await page.goto('/')
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: `artifacts/${testInfo.project.name}-home.png`, fullPage: true })
  await page.goto('/work/barbershop-booking')
  await page.screenshot({ path: `artifacts/${testInfo.project.name}-case-study.png`, fullPage: true })
})
