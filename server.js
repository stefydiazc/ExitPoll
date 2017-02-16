var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');

app.use(express.static('public'));
app.get("/", function(req, res) {
	res.sendFile(__dirname + '/public/' + 'index.html');
});



var server = app.listen(8081, function () {
	var port = server.address().port;

	console.log("Server listening on port: %d", port);
});