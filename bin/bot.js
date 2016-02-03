var GitBot = require('../lib/gitbot');

// mandatory och måste användas för att connecta till Slack API
var token = process.env.BOT_API_KEY;
var dbPath = process.env.BOT_DB_PATH;
var name = process.env.BOT_NAME;

var gitbot = new GitBot({
    token: token,
    dbPath: dbPath,
    name: name
});

gitbot.run();
