const { Builder, By, until } = require('selenium-webdriver');
const assert = require('chai').assert;
const allureReporter = require('@wdio/allure-reporter').default;
const { describe, it, after, before } = require('mocha');

describe('Google Search Test', function () {
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Search Selenium in Google', async function () {
        allureReporter.addFeature('Google Search');
        
        await driver.get('https://www.google.com');
        let searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('Selenium WebDriver');
        await searchBox.submit();
        
        await driver.wait(until.titleContains('Selenium WebDriver'), 5000);
        
        let title = await driver.getTitle();
        assert.include(title, 'Selenium WebDriver', 'Title should contain search term');
    });

    after(async function () {
        await driver.quit();
    });
});
