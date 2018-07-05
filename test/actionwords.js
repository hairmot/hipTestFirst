var webdriver = require('selenium-webdriver');
var assert = require('assert')
var chromeCapabilities = webdriver.Capabilities.chrome();
    var chromeOptions = {
        'args': ['--headless',  "window-size=1024,768", "--no-sandbox"],
        'binary': '/usr/bin/google-chrome-stable',
    };
   chromeCapabilities.set('chromeOptions', chromeOptions);
   driver = {};

exports.Actionwords = {
  loginToTheSystemAsPc386: async function () {
    driver = await new webdriver.Builder().withCapabilities(chromeCapabilities).build();
    await driver.get('https://www.google.com/')
    
      assert.equal(await driver.getTitle(), "Googrle")
     
  },
  goToTheLookupsPage: function () {
  
  },
  clickTheQuickStudentLookupLink: function () {
  
  
  },
  closeDriver: function() {
    driver.quit();
  }
};