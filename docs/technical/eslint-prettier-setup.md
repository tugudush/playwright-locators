# ESLint + Prettier Setup Plan and Progress

## Scope

- Add ESLint (flat config) for mixed project environments.
- Add Prettier with project formatting preferences.
- Add npm scripts for lint/format run and checks.
- Keep phase 1 minimal (no Playwright ESLint plugin yet).

## Plan Checklist

- [x] Update `package.json` scripts and dev dependencies.
- [x] Add `eslint.config.js` with overrides for:
  - Node CommonJS (`server.js`)
  - Browser JS (`src/js/**/*.js`)
  - TypeScript Playwright config/tests (`playwright.config.ts`, `tests/**/*.ts`)
- [x] Add `.prettierrc` with agreed rules.
- [x] Add `.prettierignore` for generated artifacts.
- [x] Install dependencies.
- [x] Run `npm run lint`.
- [x] Run `npm run format:check`.

## Progress Log

1. Created initial implementation plan in chat and finalized decisions:
   - ESLint flat config
   - Broad practical formatting scope
   - Prettier rules copied exactly as provided
   - Defer Playwright ESLint plugin to phase 2
2. Implemented `package.json` updates:
   - Added scripts: `lint`, `lint:fix`, `format`, `format:check`
   - Added dev dependencies: `eslint`, `@eslint/js`, `typescript-eslint`, `globals`, `prettier`, `eslint-config-prettier`
3. Added `eslint.config.js` with environment-specific overrides and ignore patterns.
4. Added `.prettierrc` with exact requested formatting rules.
5. Added `.prettierignore` to skip generated folders and lock file from formatting churn.
6. Installed dependencies with `npm i`.
7. Ran `npm run lint` and adjusted ESLint config scoping to avoid applying TypeScript-only rules to CommonJS config/server files.
8. Re-ran `npm run lint` successfully (pass).
9. Ran `npm run format:check` and confirmed existing repository files are not yet Prettier-formatted (49 files reported), which is expected before first full formatting pass.
10. Ran `npm run format` to apply formatting across matched repository files.
11. Re-ran `npm run format:check` and `npm run lint`; both passed.

## Next Actions

- Optionally add `eslint-plugin-playwright` later as phase 2.
