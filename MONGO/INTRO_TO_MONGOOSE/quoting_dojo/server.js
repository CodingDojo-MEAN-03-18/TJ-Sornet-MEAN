const express = require('express');
const mongoose = require('mongoose');

const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/quotingdojo');
var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true},
    quote: { type: String, required: true}
}, { timestamps: true });

var Quote = mongoose.model('Quote', QuoteSchema);

mongoose.Promise = global.Promise;

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){

    res.render('index');
});

app.post('/process', function(req, res){
    var quote = new Quote({name: req.body.name, quote: req.body.quote});

    quote.save(function(err){
        if(err){
            console.log('something went wrong');
        } else {
            console.log('successfuly added quote to db');
            res.redirect('/quotes');
        }
    });

});

app.get('/quotes', function(req, res){
    
    Quote.find({}, null, {sort: {createdAt: -1}}, function(err, quotes){
        if(err){
            console.log('something went wrong');
        } else {
            console.log(quotes);
            res.render('quotes', {quotes: quotes});
        }
    });
});

app.listen(8000, function(){
    console.log("listening on port 8000");  
});