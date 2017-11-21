var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'firefox' } };

webdriverio
    .remote(options)
    .init()
    .url('https://internet.frontier.com/')
    .getAttribute('a.').then(function () {

    })
    // .click('a.js-track-nav-shop-online').then(function (title) {
    //     var link = webdriverio
    //         .isVisible('hero');
    //     console.log('hero', isVisible);
    // })
    .end()
    .catch(function (err) {
        console.log(err);
    });