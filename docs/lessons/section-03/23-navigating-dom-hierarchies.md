# Lesson 23 – Navigating DOM Hierarchies

**Lecture:** [Udemy – Navigating DOM Hierarchies](https://www.udemy.com/course/playwright-e2e-testing-for-beginners-js-ts/learn/lecture/49961831)  
**Test file:** `tests/locators/6ChildrenParents.spec.ts`

---

## Key Concept

Playwright locators return **locator objects**, not elements. This means you can chain locator calls to drill down (or up) the DOM tree without ever leaving the Playwright API.

---

## 1 · Child Locators

### Role-based (preferred)

Scope a second `getByRole` call on a parent locator to target only its children.

```ts
const servicesList = page.getByRole('list')
const serviceItems = await servicesList.getByRole('listitem').all()
expect(serviceItems.length).toBeGreaterThan(0)
```

`all()` returns a `Locator[]` so you can iterate or assert on individual items.

### CSS child combinator

Use the CSS `>` combinator via `page.locator()` when a role-based approach is not convenient.

```ts
const serviceItems2 = await page.locator('ul > li').all()
for (const item of serviceItems2) {
  console.log(await item.textContent())
}
```

---

## 2 · Parent Locators

Use `locator('..')` to traverse **up** one level to the parent element.

```ts
const acceptCookiesButton = page.getByTestId('accept-cookies')
const cookieBanner = acceptCookiesButton.locator('..') // parent div

await acceptCookiesButton.click()
await expect(cookieBanner).not.toBeVisible()
```

`..` is the CSS / XPath shorthand for "parent node" and is the idiomatic Playwright way to get a parent without breaking out of the locator chain.

---

## 3 · Index-Based (nth) Locators

Use `.first()`, `.last()`, or `.nth(index)` to pick a specific element from a set of matches.

```ts
// buttons
const buttons = page.getByRole('button')
const acceptButton = buttons.first()
const declineButton = buttons.last()

await acceptButton.click()
await expect(declineButton).not.toBeVisible()
```

```ts
// list items (0-based index)
const thirdItem = page.getByRole('listitem').nth(2)
console.log(await thirdItem.textContent())
```

| Method     | Selects                      |
| ---------- | ---------------------------- |
| `.first()` | Element at index 0           |
| `.last()`  | Last matched element         |
| `.nth(n)`  | Element at 0-based index `n` |

---

## Summary

| Technique        | API                                |
| ---------------- | ---------------------------------- |
| Children by role | `parentLocator.getByRole(...)`     |
| Children by CSS  | `page.locator('ul > li')`          |
| Parent element   | `childLocator.locator('..')`       |
| Specific index   | `.first()` / `.last()` / `.nth(n)` |

> **Tip:** Prefer semantic locators (`getByRole`, `getByTestId`) over CSS when the HTML structure supports it — they are more resilient to markup changes.
