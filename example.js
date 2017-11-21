var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'firefox' } };
var client = webdriverio.remote(options);


client
    .init()
    .url('https://internet.frontier.com/')
    .getText('.is-white').then(function (text) {
        console.log('Text is: ' + text);
    })
    .end()