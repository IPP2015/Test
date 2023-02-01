const { setHeadlessWhen, setWindowSize  } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
setWindowSize(1600, 1200);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.cermati.com/gabung-v2?',
      show: false,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Test',
  plugins: {
    // pauseOnFail: {},
    // retryFailedStep: {
    //   enabled: true
    // },
    // tryTo: {
    //   enabled: true
    // },
    // screenshotOnFail: {
    //   enabled: true
    // },
    // tryTo: {
    //   enabled: true
    // },
    allure: {
      enabled: true
    }
    ,
    stepByStepReport: {
      enabled: true,
      fullPageScreenshots: true,
      deleteSuccessful: true,
      screenshotsForAllureReport: true
  },
  }
}