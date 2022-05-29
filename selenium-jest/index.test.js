const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')
const { Builder, By, Key } = require('selenium-webdriver')


chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())
describe("Testing Selenium using Jest", () => {
    it('should test go to NodeJs result', async() => {
        let driver = await new Builder().forBrowser('chrome').build()
        await driver.get('https://google.com')
        const searchBar = await driver.findElement(By.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input'))
        await searchBar.sendKeys("nodejs");
        await searchBar.sendKeys(Key.ENTER)
    })
    it('should test compare the search bar xpath with a random string', async() => {
        let driver = await new Builder().forBrowser('chrome').build()
        await driver.get('https://google.com')
        const searchBar = await driver.findElement(By.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input'))
        const randomString = "1089230192ksdj231*()()("
        expect(searchBar).not.toBe(randomString)
        await driver.quit()
    })
    it('should test search nodejs and click into to access nodejs.com', async() => {
        let driver = await new Builder().forBrowser('chrome').build()
        await driver.get('https://google.com')
        const searchBar = await driver.findElement(By.className('gLFyf gsfi'))
        await searchBar.sendKeys("nodejs");
        await searchBar.sendKeys(Key.ENTER)
        const nodejs_site = await driver.findElement(By.className('LC20lb MBeuO DKV0Md'))
        const actions = driver.actions({ async: true })
        await actions.doubleClick(nodejs_site).perform();
        //setTimeout(driver.quit(), 1000)

    })

})