var express = require('express');
var app = express();

//app.get('/', function (req, res) {

//})

app.use(express.static(__dirname + '/public'));

app.listen(3000);