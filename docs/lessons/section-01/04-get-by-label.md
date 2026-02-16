# getByLabel Locator

`page.getByLabel()` is used to find form elements (like inputs, textareas, and selects) by their associated `<label>` element or ARIA label attributes. This is a highly recommended locator because it mirrors how users interact with forms.

## Usage

The `getByLabel` locator searches for:

1.  A `<label>` element with a `for` attribute matching the input's `id`.
2.  An element with an `aria-labelledby` attribute pointing to a label.
3.  An element with an `aria-label` attribute.

By default, it performs a partial, case-insensitive match.

### Exact Match

If you need to match the exact label text, use the `exact: true` option.

```typescript
const nameInput = page.getByLabel('Name (required):', { exact: true })
```

## Examples

### Locating Form Fields

In a typical form, you can target inputs by the text of their labels.

```typescript
test('Get by label practice - inside forms', async ({ page }) => {
  await page.goto('FeedBackForm.html')

  // Partial match: "name" matches "Name (required):"
  const name = page.getByLabel('name')
  await name.fill('John')

  // Partial match: "email" matches "Email (required):"
  const email = page.getByLabel('email')
  await email.fill('john@email.com')
})
```

### Chaining Locators

You can combine `getByLabel` with other locators to narrow down the search within a specific container.

```typescript
const form = page.locator('#feedbackForm')
const comment = form.getByLabel('Comment')
await comment.fill('Great course!')
```

## Why use getByLabel?

1.  **User-Centric**: It tests the form as a user would see it. If a user can't find the label, your test shouldn't either.
2.  **Accessibility**: It encourages the correct use of `<label>` and `id` associations, which is essential for screen readers.
3.  **Resilience**: Your tests remain stable even if the layout changes, as long as the label text and its association with the input are preserved.

For more examples, see [tests/locators/3GetByLabel.spec.ts](../../../tests/locators/3GetByLabel.spec.ts).
