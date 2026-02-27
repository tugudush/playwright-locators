# getByTestId Locator

`page.getByTestId()` is a locator aimed at **testers** rather than users. Unlike `getByRole` or `getByText`, which look for things end users see and interact with, `getByTestId` targets a dedicated `data-testid` attribute that you add to your HTML specifically for testing.

## How It Works

You add a `data-testid` attribute to any HTML element you want to target:

```html
<button data-testid="accept-cookies">Accept</button>
<button data-testid="decline-cookies">Decline</button>
```

Then in your test, use `page.getByTestId()` passing the attribute value:

```typescript
const acceptCookiesButton = page.getByTestId('accept-cookies')
```

That's all that is needed to locate the element — no complex CSS selectors or chained locators required.

## Example

```typescript
import { test, expect } from '@playwright/test'

test('Get by test id - accept cookies', async ({ page }) => {
  await page.goto('')

  const acceptCookiesButton = page.getByTestId('accept-cookies')
  const declineCookiesButton = page.getByTestId('decline-cookies')

  await acceptCookiesButton.click()
  await expect(acceptCookiesButton).not.toBeVisible()
  await expect(declineCookiesButton).not.toBeVisible()
})
```

## Custom Test ID Attribute

By default, Playwright looks for `data-testid`. If your codebase uses a different attribute (e.g., you were previously using another test runner), you can configure Playwright to use that attribute instead:

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  use: {
    testIdAttribute: 'data-pw', // use data-pw="..." instead of data-testid="..."
  },
})
```

## When to Use getByTestId

- **Dynamic content**: Pages where text changes frequently (e.g., counters, live data).
- **Multi-language sites**: One test suite covers all locales; text-based locators would fail as translations change, but test IDs remain constant.
- **Complex DOM structures**: When an element is deeply nested and hard to reach with role or text locators, adding a `data-testid` directly to that element simplifies the locator significantly.

## Advantages and Disadvantages

**Advantages**

- Simple to use once the attribute is in place.
- Robust — the locator does not break due to UI text or structural changes.
- Elements are easy and unambiguous to locate.

**Disadvantages**

- Not user-facing — test IDs are invisible to users and require deliberate addition.
- Requires changes in two places: the application HTML **and** the test code.

## Notes

- Always clear browser cookies/storage before testing cookie-banner behaviour (the banner only shows when the `cookieConsent` cookie is absent).
- Playwright's `getByTestId` is the preferred approach when the application team agrees to maintain `data-testid` attributes as part of the codebase.

For the full test examples, see [tests/locators/4GetByTestId.spec.ts](../../../tests/locators/4GetByTestId.spec.ts).
