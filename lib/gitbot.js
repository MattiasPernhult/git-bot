var util = require('util');
var Bot = require('slackbots');

var gitHelp = require('../data/git');

var gitBot = function Constructor(settings) {
  this.settings = settings;
  this.settings.name = this.settings.name ||  'git-guru';

  this.user = null;
};

util.inherits(gitBot, Bot);

gitBot.prototype.run = function() {
  gitBot.super_.call(this, this.settings);

  this.on('start', this._onStart);
  this.on('message', this._onMessage);
};

gitBot.prototype._getChannelById = function(channelId)  {
  return this.channels.filter(function(item)  {
    if (item === undefined) {
      console.error('item är undefined');
    }
    return item.id === channelId;
  })[0];
};

gitBot.prototype._reply = function(originalMessage) {
  var self = _this;
  var channel = self._getChannelById(originalMessage.channel);
  var message = getMessage(originalMessage);
  self.postMessageToChannel(channel.name, message, {
    as_user: true,
  });
};

var getMessage = function(originalMessage) {
  var message;
  var command = originalMessage.text.split(':')[1].trim();
  var instructions = gitHelp[command];

  message = '```';
  for (var i = 0; i < instructions.commands.length; i++)  {
    message += instructions.commands[i];
    if (i < instructions.commands.length - 1) {
      message += '\n';
    }
  }

  message += '```';

  message += '\n';

  for (var j = 0; j < instructions.tips.length; j++)  {
    var number = j + 1;
    message += '\n' + number + '. ' + instructions.tips[j];
  }

  return message;
};

gitBot.prototype._isMentioningGit = function(message) {
  return message.text.toLowerCase().indexOf('gh:') > -1 ||
    message.text.lowerCase().indexOf(this.name) > -1;
};

gitBot.prototype._isFromGitBot = function(message) {
  if (this.user === undefined) {
    console.error('this.user är undefined');
  }
  return message.user === this.user.id;
};

gitBot.prototype._isChannelConversation = function(message) {
  return typeof message.channel === 'string' &&
    message.channel[0] === 'C';
};

gitBot.prototype._isChatMessage = function(message) {
  return message.type === 'message' && Boolean(message.text);
};

gitBot.prototype._onMessage = function(message) {
  if (this._isChatMessage(message) &&
    this._isChannelConversation(message) &&
    !this._isFromGitBot(message) &&
    this._isMentioningGit(message)) {
    this._reply(message);
  }
};

gitBot.prototype._welcomeMessage = function() {
  this.postMessageToChannel(this.channels[0].name, 'Hi guys, having git ' +
    'problems?\nNo problem because I\'m the Git Guru, start by typing gh: ' +
    'commands and I will help you with whatever you ask me', {
      as_user: true,
    });
};

gitBot.prototype._loadBotUser = function() {
  var self = _this;
  this.user = this.users.filter(function(user) {
    return user.name === self.name;
  })[0];
};

gitBot.prototype._onStart = function() {
  this._loadBotUser();

  this._welcomeMessage();
};

module.exports = gitBot;
