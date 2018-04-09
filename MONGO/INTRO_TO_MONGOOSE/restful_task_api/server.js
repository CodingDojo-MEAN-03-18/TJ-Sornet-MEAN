const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/restfulapidb');

var TaskSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false},

}, {timestamps: true});

var Task = mongoose.model('Task', TaskSchema);

app.get('/tasks', function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log('something went wrong');
        } else {
            res.json({data: tasks})
        }
    })
})

app.post('/tasks/create', function(req, res){
    var task = new Task(req.body);
    task.save(function(err){
        if(err){
            console.log('not added to db');
        } else {
            res.json({message: "Success", data: task});
        }
    })
});

app.get('/tasks/:id', function(req, res){
    Task.find({_id: req.params.id}, function(err, task){
        if(err){
            console.log('something went wrong with id');
        } else {
            res.json({data: task});
        }
    })
});

app.post('/tasks/update/:id', function(req, res){
    Task.findByIdAndUpdate({_id: req.params.id}, req.body, function(err, task){
        if(err){
            console.log('doc not updated');
        } else {
            res.redirect('/');
        }
    })
})

app.get('/tasks/destroy/:id', function(req, res){
    Task.find({_id: req.params.id}).remove().exec();
    return res.redirect('/');
})

app.listen(8000, function(){
    console.log('listening on port 8000')
});