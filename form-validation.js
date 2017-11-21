var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'firefox' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('https://internet.frontier.com/')
    .click('button.form-address-check__button').then(function() {

        var getText = webdriverio
        .remote(options)
        .init()
        .url('https://internet.frontier.com/')
        var text = getText('p.form__error')
        .then(function (text) {
            console.log('Error found: ' + text);
            (e).should.be.equal('Please enter first name');
        })
    })
    // .it('should get the required attribute from the form', function () {
    //     var form = ('form')

    //     var attr = form.getAttribute('required')

    //     console.log(attr);
    // })
    .end()
    .catch(function (err) {
        console.log(err);
    });