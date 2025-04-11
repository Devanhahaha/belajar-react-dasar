const { Builder, By, until, Capabilities } = require('selenium-webdriver');
const assert = require('chai').assert;
const allureReporter = require('@wdio/allure-reporter').default;
const { describe, it, after, before } = require('mocha');

describe('Google Search Test', function () {
    let driver;

    before(async function () {
        // Menyesuaikan User-Agent agar tidak terdeteksi sebagai bot
        const chromeCapabilities = Capabilities.chrome();
        chromeCapabilities.set('goog:chromeOptions', {
            args: [
                '--disable-blink-features=AutomationControlled', // Mencegah deteksi bot
                '--disable-gpu',
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--window-size=1920,1080',
                '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' // User-Agent asli
            ]
        });

        driver = await new Builder()
            .forBrowser('chrome')
            .withCapabilities(chromeCapabilities)
            .build();
    });

    it('Search ruangguru WebDriver in Google', async function () {
        allureReporter.addFeature('Google Search');

        await driver.get('https://www.google.com');

        let searchBox = await driver.wait(until.elementLocated(By.name('q')), 5000);
        await searchBox.sendKeys('ruangguru');
        await searchBox.submit();

        // Menunggu elemen hasil pencarian pertama muncul untuk memastikan halaman sudah dimuat dengan baik
        await driver.wait(until.elementLocated(By.css('h3')), 5000);

        let title = await driver.getTitle();
        assert.include(title, 'ruangguru', 'Title should contain search term');
    });

    after(async function () {
        await driver.quit();
    });
});
