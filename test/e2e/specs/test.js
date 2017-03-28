// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
var config = require('../../../config')
var ui = require('../ui-properties/ui-locators.js')
var personPage = require('../pages/person.js')
var planetPage = require('../pages/planet.js')
var starshipPage = require('../pages/starship.js')
var helpPage = require('../pages/help.js')
var privacyPage = require('../pages/privacy.js')
var aboutPage = require('../pages/about.js')
var contactPage = require('../pages/contact.js')

module.exports = {
  'default e2e tests': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .assert.elementPresent(personPage.elements.randomPersonButton)
      .pause(2000)
      .end()
  },

  'verify person record has seven table records': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .assert.elementPresent(personPage.elements.randomPersonButton)
      .assert.elementCount(ui.dev.tableRecord, 7)
      .waitForElementVisible(personPage.elements.nameTextbox, 5000) // Unsure how to hook up @nameTextBox
      .assert.elementPresent(personPage.elements.nameTextbox) // The @nameTextbox was not working
      .assert.elementPresent(personPage.elements.heightTextbox)
      .assert.elementPresent(personPage.elements.massTextbox)
      .assert.elementPresent(personPage.elements.hairColorTextbox)
      .assert.elementPresent(personPage.elements.eyeColorTextbox)
      .assert.elementPresent(personPage.elements.birthYearTextbox)
      .assert.elementPresent(personPage.elements.genderTextbox)
      .pause(2000)
      .end()
  },

  'verify planet record has nine table records': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .setValue(ui.dev.select,ui.dev.selectValue.planet)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(planetPage.elements.randomPlanetButton)
      .assert.elementCount(ui.dev.tableRecord, 9)
      .waitForElementVisible(planetPage.elements.nameTextbox, 5000) // Unsure how to hook up @nameTextBox
      .assert.elementPresent(planetPage.elements.nameTextbox) // The @nameTextbox was not working
      .assert.elementPresent(planetPage.elements.rotationPeriodTextbox)
      .assert.elementPresent(planetPage.elements.orbitalPeriodTextbox)
      .assert.elementPresent(planetPage.elements.diameterTextbox)
      .assert.elementPresent(planetPage.elements.climateTextbox)
      .assert.elementPresent(planetPage.elements.gravityTextbox)
      .assert.elementPresent(planetPage.elements.terrainTextbox)
      .assert.elementPresent(planetPage.elements.surfaceWaterTextbox)
      .assert.elementPresent(planetPage.elements.populationTextbox)
      .pause(2000)
      .end()
  },

  'verify starship record has thirteen table records': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .setValue(ui.dev.select,ui.dev.selectValue.starship)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(starshipPage.elements.randomStarshipButton)
      .assert.elementCount(ui.dev.tableRecord, 13)
      .waitForElementVisible(starshipPage.elements.nameTextbox, 5000) // Unsure how to hook up @nameTextBox
      .assert.elementPresent(starshipPage.elements.nameTextbox) // The @nameTextbox was not working
      .assert.elementPresent(starshipPage.elements.modelTextbox)
      .assert.elementPresent(starshipPage.elements.manufacturerTextbox)
      .assert.elementPresent(starshipPage.elements.costInCreditsTextbox)
      .assert.elementPresent(starshipPage.elements.lengthTextbox)
      .assert.elementPresent(starshipPage.elements.maxAtmosTextbox)
      .assert.elementPresent(starshipPage.elements.passengersTextbox)
      .assert.elementPresent(starshipPage.elements.cargoTextbox)
      .assert.elementPresent(starshipPage.elements.consumablesTextbox)
      .assert.elementPresent(starshipPage.elements.hyperdriveTextbox)
      .assert.elementPresent(starshipPage.elements.mgltTextbox)
      .assert.elementPresent(starshipPage.elements.starshipClassTextbox)
      .pause(2000)
      .end()
  },

  'verify selecting random person: name field not empty': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .assert.elementPresent(personPage.elements.randomPersonButton)
      .click(personPage.elements.randomPersonButton)
      .getText(ui.dev.tableRecord, function(result) {
        this.assert.notEqual(result,'')
      })
      .end()
  },

  'verify person button has expected value: face RANDOM PERSON': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .getText(personPage.elements.randomPersonButton, function(result) {
        this.assert.equal(result.value,'face RANDOM PERSON')
      })
      .end()
  },

  'verify planet button has expected value: public RANDOM PLANET': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .setValue(ui.dev.select,ui.dev.selectValue.planet)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(planetPage.elements.randomPlanetButton)
      .getText(planetPage.elements.randomPlanetButton, function(result) {
        this.assert.equal(result.value,'public RANDOM PLANET')
      })
      .end()
  },

  'starship e2e tests': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .setValue(ui.dev.select,ui.dev.selectValue.starship)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(starshipPage.elements.randomStarshipButton)
      .click(starshipPage.elements.randomStarshipButton)
      .waitForElementPresent(ui.dev.tableRecord, 2000)
      .pause(3000)
      .getText(ui.dev.tableRecord, function(result) {
        this.assert.notEqual(result,'')
      })
      .end()
  },

  'verify that help page loads with the correct title': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .click(helpPage.elements.helpLink)
      .getText(helpPage.elements.helpTitle, function(text) {
        this.assert.equal(text.value, 'Help')
      })
      .end()
  },
  'verify that privacy and terms page loads with the correct title': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .click(privacyPage.elements.privacyLink)
      .getText(privacyPage.elements.privacyTitle, function(text) {
        this.assert.equal(text.value, 'Privacy & Terms')
      })
      .end()
  },

  'verify that button has expected values when select is clicked randomly in a single browser session': function (browser) {
    browser
      .windowMaximize()
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .setValue(ui.dev.select,ui.dev.selectValue.starship)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(starshipPage.elements.randomStarshipButton) //Check for Starship Button
      .getText(starshipPage.elements.randomStarshipButton, function(result) {
        this.assert.equal(result.value,'public RANDOM STARSHIP')  //Check for STARSHIP Text
      })
      .pause(1000)
      .setValue(ui.dev.select,ui.dev.selectValue.person)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(personPage.elements.randomPersonButton) //Check for Person Button
      .getText(personPage.elements.randomPersonButton, function(result) {
        this.assert.equal(result.value,'face RANDOM PERSON')  //Check for STARSHIP Text
      })
      .pause(1000)
      .setValue(ui.dev.select,ui.dev.selectValue.planet)  //Check for Planet Button
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(planetPage.elements.randomPlanetButton)  //Check for Planet Button
      .getText(planetPage.elements.randomPlanetButton, function(result) {
        this.assert.equal(result.value,'public RANDOM PLANET')
      })
      .end()
  },

  "verify that About page loads & it's URL is correct": function (browser) {
    browser
      .windowMaximize()
      .url(browser.globals.devServerURL)
      .click(aboutPage.elements.aboutLink)
      .waitForElementVisible('body', 1000)
      .assert.elementPresent(aboutPage.elements.aboutTitle)
      .getText(aboutPage.elements.aboutTitle, function(result) {
        this.assert.equal(result.value,'About')
      })
      .assert.urlEquals('http://www.alexckramer.com/force-vue/#/about')
      .end()
  },

  "verify that Contact page loads & it's URL is correct": function (browser) {
    browser
      .windowMaximize()
      .url(browser.globals.devServerURL)
      .click(contactPage.elements.contactLink)
      .waitForElementVisible('body', 1000)
      .assert.elementPresent(contactPage.elements.contactTitle)
      .getText(contactPage.elements.contactTitle, function(result) {
        this.assert.equal(result.value,'Contact')
      })
      .assert.urlEquals('http://www.alexckramer.com/force-vue/#/contact')
      .end()
  },

  "verify that Contact page form accepts inputs and form submission works": function (browser) {
    browser
      .windowMaximize()
      .url(browser.globals.devServerURL)
      .click(contactPage.elements.contactLink)
      .waitForElementVisible('body', 1000)
      .assert.elementPresent(contactPage.elements.contactInfoName)
      .assert.elementPresent(contactPage.elements.contactInfoEmail)
      .assert.elementPresent(contactPage.elements.contactInfoNote)
      .clearValue(contactPage.elements.contactInfoName)
      .setValue(contactPage.elements.contactInfoName, 'foo')
      .clearValue(contactPage.elements.contactInfoEmail)
      .setValue(contactPage.elements.contactInfoEmail, 'foo@bar.com')
      .clearValue(contactPage.elements.contactInfoNote)
      .setValue(contactPage.elements.contactInfoNote, 'Foo Bar')
      .click(contactPage.elements.submitButton)
      .end()
  }
}
