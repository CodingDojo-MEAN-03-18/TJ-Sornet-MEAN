const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/dogsdb');

var DogSchema = new mongoose.Schema({
    name: { type: String, required: true},
    type: { type: String, required: true},
    color: { type: String, required: true}
}, { timestamps: true });

var Dog = mongoose.model('Dog', DogSchema);

mongoose.Promise = global.Promise;

// GET '/' Displays all of the dogs.
app.get('/', function(req, res){
    Dog.find({}, function(err, dogs){
        if(err){
            console.log('something went wrong');
        } else {
            console.log(dogs);
            res.render('index', {dogs: dogs});
        };
    });
});

//GET '/dogs/new' Displays a form for making a new dog.
app.get('/dogs/new', function(req, res){
    res.render('new');
});

// GET '/dogs/:id' Displays information about one dogs.
app.get('/dogs/:id', function(req, res){
    console.log(req.params.id)
    Dog.find({_id: Object(req.params.id)}, function(err, dogs){
        if(err){
            console.log('something went wrong /dogs/id');
        } else {
            console.log(dogs);
            res.render('dog', {dogs: dogs});
        }
    });
});

app.post('/dogs', function(req, res){
    var dog = new Dog({name: req.body.name, type: req.body.type, color: req.body.color});

    dog.save(function(err){
        if(err){
            console.log('something went wrong');
        } else {
            res.redirect('/');
        }
    }); 
});

app.get('/dogs/edit/:id', function(req, res){
    Dog.find({ _id : Object(req.params.id) }, function(err, dog){
        if(err){
            console.log('something went wrong');
        } else {
            res.render('edit', {dog: dog});
        }
    })
    
});

app.post('/dogs/:id', function(req, res){
    Dog.findByIdAndUpdate({_id: Object(req.params.id)}, req.body, function(err, dog){
        if(err){
            console.log('something went wrong');
        } else {
            res.redirect('/');
        }
    });
});

app.get('/dogs/destroy/:id', function(req, res){
    Dog.find({_id: Object(req.params.id)}).remove().exec();
    res.redirect('/');
});

app.listen(8000, function(){
    console.log('listening on port 8000');
});