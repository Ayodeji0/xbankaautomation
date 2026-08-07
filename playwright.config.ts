import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  timeout: 60 * 1000,

  expect: {
    timeout: 10 * 1000,
  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 2 : 4,

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  use: {
    // Base URL from .env
    baseURL: process.env.BASE_URL,

    browserName: 'chromium',

    headless: process.env.HEADLESS === 'true',

    viewport: {
      width: 1980,
      height: 1200,
    },

    ignoreHTTPSErrors: true,

    actionTimeout: 19 * 1000,

    navigationTimeout: 40 * 1000,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    launchOptions: {
      slowMo: Number(process.env.SLOW_MO) || 300,
    },
  },

  projects: [
    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

  outputDir: 'test-results',
});