# Project Guidelines

## Status

- This workspace is actively in progress and evolves lesson-by-lesson while following the Udemy course: https://www.udemy.com/course/playwright-e2e-testing-for-beginners-js-ts
- Prefer minimal, incremental changes that fit the current tutorial step instead of large refactors.

## Code Style

- This workspace is a Playwright learning playground with mixed JavaScript and TypeScript.
- Keep backend/server code in CommonJS style, matching `server.js`.
- Keep Playwright config/tests in TypeScript/ESM style, matching `playwright.config.ts` and `tests/**/*.spec.ts`.
- Frontend scripts are plain browser JS (IIFE/DOM APIs), matching `src/js/index.js` and `src/js/feedBackForm.js`.
- Prefer Playwright semantic locators (`getByRole`, `getByLabel`, `getByText`, `getByTestId`) unless a test explicitly teaches CSS locators.

## Architecture

- `server.js` serves `src/` as static content on port `5000`.
- Pages are standalone HTML files in `src/` with page-specific scripts/styles.
- UI state is browser-local (cookie/localStorage/sessionStorage), primarily in `src/js/index.js` and `src/js/feedBackForm.js`.
- Test suites are organized by topic:
  - `tests/actions/` for user interactions and browser events.
  - `tests/locators/` for locator strategies.
  - `tests/configure/` for Playwright features (`describe`, `hooks`, annotations, tags, devices, `test.use`).
  - `tests/practice/` for end-to-end form scenarios.

## Build and Test

- Install deps: `npm i`
- Start app: `npm start` (serves `http://localhost:5000`)
- Run tests: `npx playwright test`
- Run a single file: `npx playwright test tests/actions/1Simple.spec.ts`
- Open Playwright UI mode when needed: `npx playwright test --ui`
- `playwright.config.ts` starts the web server automatically via `npm start`; keep `baseURL` aligned with server port.

## Project Conventions

- Treat this as a tutorial-driven codebase in active development; keep examples understandable and aligned with the current course progression.
- Most local-page tests use `await page.goto('')` and rely on configured `baseURL`.
- Preserve pedagogical examples (including intentional `fail`, `skip`, `only` demos) under `tests/configure/1Annotations`.
- Keep “raw vs refactored” parity for form practice (`tests/practice/Form.spec.ts` and `tests/practice/Form.refactored.spec.ts`).
- If adding locator demos, mirror existing progression in `tests/locators/0Intro.spec.ts` through `7CodeGen.spec.ts`.

## Integration Points

- Runtime dependency: `express` only.
- Test dependency: `@playwright/test`.
- External-site checks exist in some tests (e.g., `playwright.dev`, `google.com`, OpenStreetMap); avoid adding brittle external assertions unless required.
- Device/geolocation/locale examples live in `tests/configure/6Device/` and `tests/configure/5Use/`.

## Security

- Cookie consent currently uses a client cookie (`cookieConsent`) in `src/js/index.js`.
- Feedback form data is persisted in browser storage in `src/js/feedBackForm.js`; treat name/email/comment as sensitive when extending behavior.
- No active auth flow is wired in current config (`tests/setup/Auth.setup.ts` exists but is not configured in `playwright.config.ts`).
- Avoid introducing secrets in test data or committed storage-state files.
