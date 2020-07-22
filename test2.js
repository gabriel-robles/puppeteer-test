const puppeteer = require('puppeteer')

let scrapeBooks = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://books.toscrape.com/')

    const results = await page.evaluate(() => {
        const books = []
        document.querySelectorAll('section > div > ol > li img').forEach(book => 
            books.push(book.getAttribute('alt'))
        )

        return books
    })

    await browser.close()
    return results
}

scrapeBooks().then((value) => {
    console.log(value)
})