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
mongoose.connect('mongodb://localhost/player-api');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;
const { Schema } = mongoose;
const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: [2, "Name should be at least 2 characters"]
  },
  position: {
    type: String,
    trim: true
  },
  status1: {
    type: Array
  },
  status2: {
    type: Array
  },
  status3: {
    type: Array
  }
}, {
  timestamps: true
})
playerSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const Player = mongoose.model('Player', playerSchema);

// - - - - = = = = Controller = = = = - - - -
const playerController = {
  index: (request, response) => {

    Player.find({})
      .then(players => response.json(players))
      .catch(error => console.log(error));

  },
  create: (request, response) => {

    Player.create(request.body)
      .then(player => response.json(player))
      .catch(error => console.log(error));

  },
  delete: (request, response) => {

  },
  update: (request, response) => {
    console.log(request.params.id);
    Player.findById(request.params.id)
      .then( (player) => {
        console.log(player);
        if(request.params.gameId == '1'){
          if(request.params.status == 'playing'){
            player.status1 = [true, false, false]
            player.save(function(err) {
              if(err) {
                console.log(err);
              }
              console.log(player);
              response.json(player);
            })
          }
          if(request.params.status == 'notPlaying'){
            player.status1 = [false, true, false]
            player.save(function(err) {
              if(err) {
                console.log(err);
              }
              console.log(player);
              response.json(player);
            })
          }
          if(request.params.status == 'undecided'){
            player.status1 = [false, false, true]
            player.save(function(err) {
              if(err) {
                console.log(err);
              }
              console.log(player);
              response.json(player);
            })
          }
        }
        if(request.params.gameId == '2'){
          if(request.params.status == 'playing'){
            player.status2 = [true, false, false]
            player.save(function(err) {
              if(err) {
                console.log(err);
              }
              console.log(player);
              response.json(player);
            })
          }
          if(request.params.status == 'notPlaying'){
            player.status2 = [false, true, false]
            player.save(function(err) {
              if(err) {
                console.log(err);
              }
              console.log(player);
              response.json(player);
            })
          }
          if(request.params.status == 'undecided'){
            player.status2 = [false, false, true]
            player.save(function(err) {
              if(err) {
                console.log(err);
              }
              console.log(player);
              response.json(player);
            })
          }
        }
        if(request.params.gameId == '3'){
          if(request.params.status == 'playing'){
            player.status3 = [true, false, false]
            player.save(function(err) {
              if(err) {
                console.log(err);
              }
              console.log(player);
              response.json(player);
            })
          }
          if(request.params.status == 'notPlaying'){
            player.status3 = [false, true, false]
            player.save(function(err) {
              if(err) {
                console.log(err);
              }
              console.log(player);
              response.json(player);
            })
          }
          if(request.params.status == 'undecided'){
            player.status3 = [false, false, true]
            player.save(function(err) {
              if(err) {
                console.log(err);
              }
              console.log(player);
              response.json(player);
            })
          }
        }


      })
      .catch(console.log("player not found"))
  },
  show: (request, response) => {
    console.log(request.params.id)
    Player.findById(request.params.id)
      .then(player => response.json(player))
      .catch(console.log("player not found"))
  }
};

// - - - - = = = = Routes = = = = - - - -
app
.get('/players', playerController.index)
.get('/players/:id', playerController.show)
.get('/players/:id/:status/:gameId', playerController.update)
.post('/players', playerController.create)
.delete('/:id', playerController.delete)
.all("*", (req,res,next) => {
    res.sendFile(path.resolve("dist/index.html"))
  });

// - - - - = = = = Server Listener = = = = - - - -
const port = 8000;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));
