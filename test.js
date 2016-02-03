
var gitHelp = require('./data/git');

var originalMessage = 'git help: commit ';


var command = originalMessage.split(':')[1].trim();

console.log(command === 'commit');

var instructions = gitHelp[command];


console.log(instructions);
