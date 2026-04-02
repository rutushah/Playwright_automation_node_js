// @ts-check
import { fa } from '@faker-js/faker';
import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-options';

export default defineConfig<TestOptions> ({
  use: {
    
    globalsQAURL: 'https://www.globalsqa.com/demo-site/draganddrop/',
    baseURL: 'http://localhost:4200/',
 },

  projects: [
    {
      name: 'chromium',
    },
  ],


});

