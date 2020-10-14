let Browser = require('zombie')

let browser = new Browser()
browser.site = 'http://localhost:3000/'

let name = 'Poppy'

browser.visit('/welcome', () =>{
    browser.assert.success()
    browser.assert.element('h2#question')

    browser.fill('#name', name)
    browser.pressButton('#submitname', () => {
        browser.assert.text('p#response', 'Welcome ' + name)
        console.log('All tests passed')
    })
})