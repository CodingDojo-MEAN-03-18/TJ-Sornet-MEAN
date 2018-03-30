var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require("path");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'codingdojocountermean', resave: true, saveUninitialized: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.use(function(req, res, next) {
    res.locals.count = req.session.count;
    res.locals.message = req.session.message;
    res.locals.player_guess = req.session.player_guess;
    res.locals.compNum = req.session.compNum;
    res.locals.compNum = -1;
    next();
});

app.get('/', function(req, res){
    if(req.session.count === undefined){
        req.session.count = Math.floor(Math.random() * 100) + 1;
    }
    res.render('index')
});



app.post('/process', function(req, res){
    if(req.session.count === undefined){
        req.session.count = Math.floor(Math.random() * 100) + 1;
    }
    req.session.message = ''
    req.session.player_guess = parseInt(req.body.guessnumber);
    req.session.compNum = Math.floor(Math.random() * 100) + 1;
    if(req.session.compNum > req.session.player_guess){
        req.session.message = "Too low!";
    }
    if(req.session.compNum < req.session.player_guess){
        req.session.message = "Too high!"
    }
    res.redirect('/')
});

app.post('/playagain', function(req, res){
    if(req.session.count === undefined){
        req.session.count = Math.floor(Math.random() * 100) + 1;
    }
    req.session.compNum = -1;
    req.session.player_guess = undefined;
    res.redirect('/')
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});