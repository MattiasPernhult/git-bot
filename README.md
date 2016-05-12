# git-bot
Slack bot which provide help with git commands

### Features

* **gh: commit**  information about commits
* **gh: add**     information about adding files to stage index
* **gh: push**    information about pushing
* **gh: pull**    information about pulling
* **gh: branch**  information about branches
* **gh: merge**   information about merging branches
* **gh: status**  information about your git status
* **gh: log**     information about the git log

### Get API key from Slack

You need to register a new slack bot for a channel to receive a api key for the bot

### Usage

First you need to clone this repo into your local machine

``` shell
git clone https://github.com/MattiasPernhult/git-bot.git
```

Next navigate to project root through *terminal* or *commando prompt*

Then for **Mac or linux** type

``` shell
BOT_API_KEY=your_api_key BOT_NAME=bot_name node bin/bot.js
```

And for **Windows** type

``` shell
set BOT_API_KEY=your_api_key && set BOT_NAME=bot_name && node bin/bot.js
```

And there the bot is up and running, so type a command in the specified channel and the bot will respond.
