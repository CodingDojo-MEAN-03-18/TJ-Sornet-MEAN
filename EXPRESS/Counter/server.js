var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require("path");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'codingdojocountermean'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    if(req.session.count === undefined){
        req.session.count = 0;
    } else {
        req.session.count++;
    }
    res.render('index', {count: req.session.count})
});

app.post('/process', function(req, res){
    if(req.body['action'] == 'increment'){
        req.session.count += 1;
    } else if(req.body['action'] == 'reset'){
        req.session.count = 0;
    }
    res.redirect('/')
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});
