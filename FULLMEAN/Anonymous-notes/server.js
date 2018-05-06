// Express
const express = require('express');
const app = express();

// Path
const path = require('path');

// Static Directory
app.use(express.static(path.join(__dirname,'/dist')));

// Body Parser
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// - - - - = = = = Model = = = = - - - -
const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/anonnotesapi');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;
const { Schema } = mongoose;
const noteSchema = new Schema({
  note: {
    type: String,
    trim: true,
    required: [true, 'Note is required'],
    minlength: [3, 'Notes length must be greater than 3'],
    unique: true
  }
}, {
  timestamps: true
});
noteSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const Note = mongoose.model('Note', noteSchema);

// - - - - = = = = Controller = = = = - - - -
const noteController = {
  index: (req, res) => {
    Note.find({})
      .then(notes => res.json(notes))
      .catch(error => console.log(error));
  },
  create: (req, res) => {
    Note.create(req.body)
      .then(note => res.json(note))
      .catch(error => console.log(error));
  }
};

// - - - - = = = = Routes = = = = - - - -
app
  .get('/notes', noteController.index)
  .post('/notes', noteController.create)
  .all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
  });

// - - - - = = = = Server Listener = = = = - - - -
const port = 8000;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));
