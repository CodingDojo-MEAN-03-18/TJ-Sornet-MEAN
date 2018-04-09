const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/1955API');

var People55Schema = new mongoose.Schema({
    name: {type: String, required: true}
});

var People55 = mongoose.model('People55', People55Schema);

app.get('/', function(req, res){
    People55.find({}, function(err, people55){
        if(err) {
            console.log('something went wrong');
        } else {
            res.json({data: people55});
        }
    })
})

app.get('/new/:name/', function(req, res){
    var person = new People55({name: req.params.name});
    console.log(person);
    person.save(function(err){
        if(err){
            console.log('not added to db');
        } else {
            return res.redirect('/');
        }
    })
});

app.get('/remove/:name', function(req, res){
    People55.find({name: req.params.name}).remove().exec();
    return res.redirect('/');
});

app.get('/:name', function(req, res){
    People55.find({name: req.params.name}, function(err, person){
        if(err){
            console.log('person not retrieved from database');
            return redirect('/')
        } else {
            res.json({data: person});
        }
    });
});

app.listen(8000, function(){
    console.log('listening on port 8000')
})