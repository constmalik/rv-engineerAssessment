var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'firefox' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('https://internet.frontier.com/')
    .setValue('.js-track-form-zip', '28217').then(function () {
        var userInput = $('.js-track-form-zip')

        var value = userInput.getValue()

        .click('button.form-address-check__button').then(function(value) {
            console.log('The user typed in ' + value);
        })
    })
    .end()
    .catch(function (err) {
        console.log(err);
    });