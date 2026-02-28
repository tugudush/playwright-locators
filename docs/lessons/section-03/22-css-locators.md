# CSS Locators

CSS selectors and XPath are the last resort for locating elements in Playwright. They are powerful but brittle because they depend on the DOM structure and styling, which can change frequently.

## Why CSS Locators?

- Use them when other locators (`getByRole`, `getByText`, `getByLabel`, `getByTestId`, etc.) are not available or don't work.
- They are useful for selecting elements based on their:
  - **Tag name** (e.g., `header`, `h1`, `button`)
  - **ID** (e.g., `#cookie-banner`)
  - **Class** (e.g., `.accept`, `.primary-button`)
  - **Attributes** (e.g., `[type="submit"]`)
  - **Chaining/Hierarchy** (e.g., `header > h1`, `section #feedback`)

## Syntax

Playwright uses the `page.locator(selector: string)` method for CSS and XPath selectors.

```typescript
// Select by tag
const header = page.locator('header')

// Select by ID
const cookieBanner = page.locator('#cookie-banner')

// Select by class
const acceptButton = page.locator('.accept')

// Chained CSS selectors
const welcomeMessage = page.locator('header > h1')
```

## Example Test

In [tests/locators/5Css.spec.ts](tests/locators/5Css.spec.ts), we demonstrate various CSS selector strategies:

```typescript
import { test, expect } from '@playwright/test'

test('Css selectors', async ({ page }) => {
  await page.goto('')

  // Chaining locators vs CSS child combinator
  const welcomeMessage = page.locator('header').locator('h1')
  const welcomeMessage2 = page.locator('header > h1')

  // Assertions for text content
  await expect(welcomeMessage).toContainText('Welcome')
  await expect(welcomeMessage2).toContainText('Welcome')

  // Select by ID (#)
  const cookieBanner = page.locator('#cookie-banner')
  await expect(cookieBanner).toBeVisible()

  // Select by class (.)
  const acceptButton = page.locator('.accept')
  await acceptButton.click()

  // Verify behavior after action
  await expect(cookieBanner).not.toBeVisible()
})
```

## Best Practices

1. **Avoid Brittle Selectors**: Don't use long, complex paths like `body > div:nth-child(2) > section > div > button`. These break easily if the layout changes just a little.
2. **Prefer Stable IDs/Classes**: If you must use CSS, look for IDs or unique classes that are unlikely to change during a redesign.
3. **Use Hierarchy Sparingly**: `header > h1` is better than a deep path, but `page.getByRole('heading', { level: 1 })` is still preferred for accessibility and stability.
