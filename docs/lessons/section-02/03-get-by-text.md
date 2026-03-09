# getByText Locator

`page.getByText()` allows you to find elements by their text content. It is useful for finding non-interactive elements like paragraphs, spans, or labels when they don't have a specific role or when you want to assert on text presence.

## Usage

The `getByText` locator matches the text content of an element. By default, it performs a partial, case-insensitive match and ignores extra whitespace.

### Exact Match

If you need an exact match, you can pass the `exact: true` option.

```typescript
const element = page.getByText('Feedback Form', { exact: true })
```

## Examples

### Locating Titles or Paragraphs

Useful for verifying that specific text is displayed on the page.

```typescript
test('Get by text practice', async ({ page }) => {
  await page.goto('FeedBackForm.html')

  const title = page.getByText('Feedback Form').first()
  await expect(title).toBeVisible()
})
```

### Checking for Hidden Elements

You can use `getByText` to verify that certain text is NOT visible to the user.

```typescript
test('Get by text practice - hidden elements', async ({ page }) => {
  await page.goto('FeedBackForm.html')

  const hiddenButton = page.getByText('Hidden feature')
  await expect(hiddenButton).not.toBeVisible()
})
```

### Error Messages

`getByText` is often used to wait for or assert on validation error messages.

```typescript
test('Get by text practice - error messages', async ({ page }) => {
  await page.goto('FeedBackForm.html')

  const emailValidationMessage = page.getByText('Invalid email format')
  await expect(emailValidationMessage).not.toBeVisible()

  await page.getByRole('textbox', { name: 'email' }).fill('john@emailcom')

  await expect(emailValidationMessage).toBeVisible()
})
```

## Best Practices

- Use `getByRole` for interactive elements (buttons, links, inputs) whenever possible.
- Use `getByText` for static content or when checking for specific messages.
- Be careful with `.first()` if multiple elements contain the same text.
