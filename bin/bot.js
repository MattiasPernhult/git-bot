var GitBot = require('../lib/gitbot');

var token = process.env.BOT_API_KEY;
var name = process.env.BOT_NAME;

var gitbot = new GitBot({
    token: token,
    name: name
});

gitbot.run();
