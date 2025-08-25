import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/test/e2e',
  fullyParallel: true,
  workers: 4,
  timeout: 15000,
  expect: {
    timeout: 5000,
  },
  reporter: 'line',
  use: {
    baseURL: 'http://localhost:3001',
    trace: 'off',
    actionTimeout: 5000,
    navigationTimeout: 10000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
