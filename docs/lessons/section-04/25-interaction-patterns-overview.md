# Lesson 25 – Interaction Patterns Overview

**Course**: Playwright E2E Testing for Beginners (JS/TS)
**Section**: 04 – Actions
**Instructor**: Alex ("The Concise Developer")
**Video**: [Section intro – Interacting with elements](https://www.udemy.com/course/playwright-e2e-testing-for-beginners-js-ts/learn/lecture/51171659)

---

## Overview

This is the introductory lecture for the **Actions** section. The section moves beyond locator strategies and focuses on how to actually interact with elements — from simple clicks and text entry to advanced topics like cookies, browser storage, event handling, and file operations.

---

## Topics Covered in This Section

### 1. Basic Actions

The foundational interaction methods Playwright exposes:

| Action    | Method                  | Description                                |
| --------- | ----------------------- | ------------------------------------------ |
| Type text | `fill()`                | Enter text into an input field             |
| Click     | `click()`               | Click a button, link, or any element       |
| Checkbox  | `check()` / `uncheck()` | Toggle checkbox state                      |
| Dropdown  | `selectOption()`        | Select an option from a `<select>` element |

> The section goes beyond the basics and covers **advanced techniques** for each of these actions (e.g. modifier keys for clicks, clearing before filling, etc.).

### 2. Cookies

- Reading, writing, and clearing browser cookies during tests.

### 3. Browser Storage

- Working with **localStorage** and **sessionStorage**.
- Useful for pre-seeding state before a test runs (avoiding repetitive UI flows).

### 4. Events

Three categories of browser events are covered:

- **Dialogs** – Handling `alert`, `confirm`, and `prompt` pop-ups.
- **Console** – Listening to and asserting on browser console output.
- **HTTP Requests** – Intercepting and asserting on network requests/responses.

### 5. Handling Files

- **File upload** – Triggering file chooser dialogs and providing files.
- **File download** – Capturing and verifying downloaded files.

---

## VS Code Setup Tip

To **see the browser** while tests run (highly recommended for this section):

1. Open the **Playwright extension** panel in VS Code.
2. Enable the **"Show browser — one worker"** checkbox.

### What this setting does

- Keeps the browser window **open** after each test completes so you can observe the result.
- Forces Playwright to **reuse a single browser instance** between tests.
- **Disables parallel execution** (runs tests sequentially with one worker).

> This is important when learning interaction patterns because you want to visually confirm what each action does before moving on.

---

## Key Takeaways

- This section builds directly on the **locator strategies** covered in Section 03.
- The progression goes: **basic actions → cookies/storage → events → files**.
- Enabling "Show browser — one worker" in VS Code is essential for observing test behaviour during this section.
