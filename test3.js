const puppeteer = require('puppeteer')

let priceBooks = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://books.toscrape.com/')

    const results = await page.evaluate(() => {
        const prices = []
        document.querySelectorAll('section > div > ol > li > article > div p:first-child').forEach(price => 
            prices.push(price.innerHTML)
        )

        return prices
    })

    await browser.close()
    return results
}

priceBooks().then((value) => {
    console.log(value)
})