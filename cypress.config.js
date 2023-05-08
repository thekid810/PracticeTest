const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig(
{
  env: {
    url : "https://marsair.recruiting.thoughtworks.net/HungDangPhi"
  },
  e2e: {
    setupNodeEvents,
    video: false,
    specPattern: 'cypress/e2e/PracticeTest/*.feature'
  },
});
