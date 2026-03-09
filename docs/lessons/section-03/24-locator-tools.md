# Lesson 24 – Locator Tools

## Overview

This lesson covers three built-in Playwright tools that help you discover locators, debug tests, and inspect execution step-by-step:

1. **Playwright Codegen** – generate locators and assertions by recording browser interactions
2. **VS Code Debugger** – step through test code line-by-line with breakpoints
3. **Playwright UI Mode** – run tests with an interactive timeline and page snapshots

---

## 1. Playwright Codegen

Codegen opens a live browser alongside the Playwright Inspector. Every interaction you perform is recorded as TypeScript/JavaScript code.

### Launch from the terminal

```bash
# Start your app first
npm start

# In a second terminal tab
npx playwright codegen localhost:5000
```

### Launch from VS Code

Testing sidebar (beaker icon) → **Playwright** section → **Tools** → **Record new** (or **Record at cursor**)

### Inspector toolbar actions

| Button                           | What it does                                             |
| -------------------------------- | -------------------------------------------------------- |
| **Record** (red dot)             | Start / stop recording clicks and input                  |
| **Pick locator** (cursor icon)   | Hover over elements to preview their locator             |
| **Assert visibility** (eye icon) | Click an element to generate a `toBeVisible()` assertion |

### Example generated code

```typescript
await page.getByText('Corporate Events').click()
await page.getByText('Graduation Parties').click()
await expect(page.getByText('Corporate Events')).toBeVisible()
```

> **Tip:** Use _Pick locator_ without recording to quickly find a locator for an existing test.

---

## 2. VS Code Debugger

The debugger pauses test execution at breakpoints so you can watch the browser and variables update in real time.

### Setup

1. Click in the **gutter** (left of the line number) to add a red breakpoint dot.
2. Right-click the play icon next to the test → **Debug Test**.

### Controls

| Action                           | Shortcut     |
| -------------------------------- | ------------ |
| Step Over (execute current line) | **F10**      |
| Continue to next breakpoint      | **F5**       |
| Stop session                     | **Shift+F5** |

### Typical workflow

1. Test pauses at the breakpoint; browser shows `about:blank`.
2. Press **F10** → `page.goto()` executes → browser navigates to the page.
3. Press **F10** → `getByLabel()` resolves → element is highlighted on the page.
4. Continue stepping to watch `fill()`, `clear()`, and other actions happen live.

---

## 3. Playwright UI Mode

UI Mode runs your tests in an interactive viewer that shows a timeline of every action with before/after screenshots.

### Launch

```bash
npx playwright test tests/locators/3GetByLabel.spec.ts --ui
```

### Interface panels

| Panel  | Content                                                     |
| ------ | ----------------------------------------------------------- |
| Left   | Test explorer – file tree and pass/fail status              |
| Centre | Action list with execution times (e.g. `428 ms`)            |
| Top    | Scrubber / timeline – hover to see page state at any moment |
| Right  | Live browser preview snapshot                               |

### Workflow

1. Run the test file with `--ui`.
2. Click any action in the action list to jump to that snapshot.
3. Hover over the timeline scrubber to preview intermediate states.
4. Use the **Settings** button (bottom-left) to toggle _Show browser_ and _Trace viewer_.

---

## Quick Reference

| Tool              | How to invoke                             |
| ----------------- | ----------------------------------------- |
| Codegen (CLI)     | `npx playwright codegen localhost:5000`   |
| Codegen (VS Code) | Testing panel → Playwright → _Record new_ |
| Debugger          | Right-click test → _Debug Test_           |
| UI Mode           | `npx playwright test [file] --ui`         |
