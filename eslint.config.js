const js = require('@eslint/js')
const globals = require('globals')
const tseslint = require('typescript-eslint')
const eslintConfigPrettier = require('eslint-config-prettier')

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
      '.playwright/**',
    ],
  },
  js.configs.recommended,
  {
    files: ['server.js', 'eslint.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['src/js/**/*.js'],
    languageOptions: {
      sourceType: 'script',
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ['playwright.config.ts', 'tests/**/*.ts'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...tseslint.configs.recommended[0].rules,
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    rules: {
      'no-unused-vars': 'off',
    },
  },
  eslintConfigPrettier,
]
