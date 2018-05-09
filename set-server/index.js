var express = require('express');
var app = express();
var ws = require('express-ws')(app);

app.ws('/', function(ws, request){
	ws.on('validSet', function(msg){
		console.log(msg)
	})
})

app.listen(3001, function(){
	console.log('Set server listening on port 3001')
});