// @ts-check
import { defineConfig } from '@playwright/test';
const ENV = require('./config/env');

const config = defineConfig({
  testDir: './tests',

  timeout: 40 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: 'html',

  use: {
    baseURL: ENV.baseURL,        // <-- Add this
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
});

module.exports = config;