// @ts-check
import { fa } from '@faker-js/faker';
import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-options';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig<TestOptions> ({
  timeout: 30000,
  globalTimeout: 100 * 1000,

  retries: 0,
 
  reporter: 'html',

  use: {
    
    globalsQAURL: 'https://www.globalsqa.com/demo-site/draganddrop/',
    baseURL: process.env.DEV === '1' ? 'http://localhost:4200/' 
            : process.env.STAGING === '1' ? 'https://staging.example.com/'
            : 'http://localhost:4200/',

    trace: 'on-first-retry',
    video : {
      mode: 'off',
      size: {width:1920, height:1080}
    },
        // Viewport used for all pages in the context.
        viewport: { width: 1920, height: 1080 },
 },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'dev',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200/',
      },
    },
  ],


});

