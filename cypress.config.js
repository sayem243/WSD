const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 60000,
  reporter: "junit",

  reporterOptions: {
    mochaFile: "cypress/reports/junitXMLresults-[hash].xml",
    toConsole: true,
  },

  retries: {
    runMode: 1,
    openMode: 0,
  },

  videoUploadOnPasses: false,
  video: false,
  screenshotOnRunFailure: false,
  projectId: "qfbus9",

  env: {
    CYPRESS_RECORD_KEY: "3d3502ed-23be-4776-b0ee-07ce36029473",
  },

  e2e: {
    async setupNodeEvents(on, config) {
    const bundler = createBundler({
      plugins: [createEsbuildPlugin(config)],
    });
    
    on("file:preprocessor", bundler);
    await addCucumberPreprocessorPlugin(on, config);
    
    on('file:preprocessor', cucumber())
    
    return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    },  
});
