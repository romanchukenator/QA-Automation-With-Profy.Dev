import { expect, test } from '@playwright/test';

test.describe("Sidebar Navigation", () => {

  test.describe("Under 'Desktop' resolution", () => {
    test.describe.configure({ mode: 'serial' });

    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1025, height: 900 });
      await page.goto('http://localhost:3000/dashboard');
    });

    test("links work as expected", async ({ page }) => {
      await expect(
        page.getByRole('navigation').getByText("Projects")
      ).toHaveAttribute('href', '/dashboard');

      await expect(
        page.getByRole('navigation').getByText("Issues")
      ).toHaveAttribute('href', '/dashboard/issues');

      await expect(
        page.getByRole('navigation').getByText("Alerts")
      ).toHaveAttribute('href', '/dashboard/alerts');

      await expect(
        page.getByRole('navigation').getByText("Users")
      ).toHaveAttribute('href', '/dashboard/users');

      await expect(
        page.getByRole('navigation').getByText("Settings")
      ).toHaveAttribute('href', '/dashboard/settings');
    });

    test("nav. bar is collapsible", async ({ page }) => {
      // collpase navigation
      await page.getByRole('button', { name: "Collapse" }).click();

      await expect(
        page.getByRole('navigation').getByRole('link')
      ).toHaveCount(5);

      await expect(
        page.getByRole('navigation')
      ).not.toHaveText("Issues");
    });
  });
});

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
//
