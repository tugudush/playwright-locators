# getByRole Locator

`page.getByRole()` is one of the most recommended locators in Playwright because it reflects how users and assistive technology perceive the page.

## Usage

The `getByRole` locator allows you to find elements by their [ARIA role](https://www.w3.org/TR/wai-aria-1.2/#role_definitions).

### Common Roles
- `button`
- `heading`
- `link`
- `list`
- `listitem`
- `checkbox`
- `textbox`

## Examples

### Locating by Name
You can combine the role with an accessible name (usually the text content or an `aria-label`).

```typescript
const servicesHeading = page.getByRole('heading', {
  name: 'our services',
})
```

### Locating Buttons
Buttons are frequently interacted with in E2E tests.

```typescript
const acceptButton = page.getByRole('button', {
  name: 'Accept',
  exact: true,
})
await acceptButton.click()
```

### Lists and List Items
You can chain locators to find items within a specific container.

```typescript
const servicesList = page.getByRole('list')
const serviceItems = servicesList.getByRole('listitem')

await expect(serviceItems).toHaveText([
  'Wedding Planning',
  'Corporate Events',
  'Private Parties',
])
```

## Why use getByRole?
1. **Accessibility**: It ensures your UI is accessible by forcing you to use semantic HTML and ARIA roles.
2. **Resilience**: Tests are less likely to break if the underlying CSS or HTML structure changes, as long as the role and name remain the same.
3. **Readability**: It makes the intent of the test clear (e.g., "click the button named Accept").

For more examples, see [tests/locators/1GetByRole.spec.ts](../../../tests/locators/1GetByRole.spec.ts).
