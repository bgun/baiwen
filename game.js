'use strict';

var fs = require('fs');
var prompt = require('prompt');
prompt.message = "";
prompt.delimiter = "> ";
prompt.start();

var levelFile = fs.readFileSync('./level.json', 'utf8');
var level = JSON.parse(levelFile);

console.log(level[level.start]);

var current_node = level.nodes[level.start];

var gameLoop = function loop() {
	var command = "";
	console.log(current_node.title + "\n" + current_node.text);
	prompt.get('?', function(err, result) {
		command = result['?'];
		if(command == "exit") {
			console.log("Bye");
		} else {
			console.log(command);
			loop();
		}
	});
}
gameLoop();