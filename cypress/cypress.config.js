const { defineConfig } = require("cypress");
import * as webpack from "@cypress/webpack-preprocessor";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
