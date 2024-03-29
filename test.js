var webdriverio = require('webdriverio');
var options = {desiredCapabilities: {browserName: 'firefox'}};

webdriverio
    .remote(options)
    .init()
    .url('https://internet.frontier.com/').then(function () {
        
        var isVisible = webdriverio
            .remote(options)
            .init()
            .url('https://internet.frontier.com/')
            .isVisible('hero');
            console.log('hero', isVisible); // outputs:true

        isVisible = webdriverio
            .remote(options).init().url('https://internet.frontier.com/').isVisible('.graphic');
        console.log('graphic', isVisible); // outputs:true

        isVisible = webdriverio
            .remote(options).init().url('https://internet.frontier.com/').isVisible('.section--bg');
        console.log('section', isVisible); // outputs:true


    })
    .end()
    .catch(function (err) {
        console.log(err);
    });