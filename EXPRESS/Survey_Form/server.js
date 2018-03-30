var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index')
});

app.post('/result', function(req, res){
    location = req.body['place'];
    language = req.body['language'];
    name = req.body['name'];
    comment = req.body['comment']
    res.render('result', {location: location, language: language, names: name, comment: comment})
});



app.listen(8000, function() {
    console.log("listening on port 8000");
});