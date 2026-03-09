# Setting up Playwright

This lesson covers how to set up Playwright in your project.

## Prerequisites

Before installing Playwright, ensure you have Node.js installed on your machine.

## Installation

To install Playwright and its dependencies in this project, run:

```bash
npm i
```

This will install:

- `@playwright/test`: The Playwright test runner.
- `express`: Used to serve the local playground application.
- Other development dependencies like ESLint and Prettier.

## Running the Application

The application to be tested is located in the `src/` directory. To start the local server:

```bash
npm start
```

The application will be available at `http://localhost:5000`.

## Running Tests

To run all tests in the project, use the following command:

```bash
npx playwright test
```

### Running Specific Tests

To run a specific test file:

```bash
npx playwright test tests/actions/1Simple.spec.ts
```

### UI Mode

Playwright provides a UI mode for better debugging and test development:

```bash
npx playwright test --ui
```

## Configuration

The Playwright configuration is located in [playwright.config.ts](../../../playwright.config.ts). It includes settings for:

- `baseURL`: Set to `http://localhost:5000`.
- `webServer`: Configured to run `npm start` automatically when running tests.
- Browsers: Chromium, Firefox, and WebKit.
