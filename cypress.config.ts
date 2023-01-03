import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://spa-qa.miltenyibiotecdev.com',
    defaultCommandTimeout: 10000
  },
});
