import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:1313',
  },
  webServer: {
    command: 'hugo server --port 1313',
    port: 1313,
    reuseExistingServer: true,
  },
});
