// Import express and path modules.
const express = require( "express");
const path = require( "path");
const session = require('express-session');
const app = express();
// Define the static folder.
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'codingdojochatroom'}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Root route to render the index.ejs view.
app.get('/', function(req, res) {
    res.render("index");
})
// Start Node server listening on port 8000.
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})

var io = require('socket.io').listen(server);

class User { 
    constructor (id, name){
        this.id = id;
        this.name = name;
    }
 }

 class Message {
     constructor (msg, user){
        this.content = msg;
        this.user = user;
     }
 }

let num = 0;
let users = [];
const messages = [];

io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // all the server socket code goes in here
    socket.on("got_a_new_user", function(name){
        const user = new User(socket.id, name.name);
        console.log('got new user', user);
        users.push(user);
        socket.broadcast.emit('new_user', user);
        socket.emit('all_users', users);
        socket.emit('all_messages', messages);
    });

    socket.on('new_message', function(msg){
        const user = users.find((user) => user.id === socket.id );
        const message = new Message(msg.msg, user);
        messages.push(message);
        io.emit('write_new_message', message);
        console.log('got new message');
    });

    socket.on('disconnect', function(){
        console.log('somebody disconnected');
        const user = users.find((user) => user.id === socket.id );
        users = users.filter( possibleUser => possibleUser.id !== user.id );
        io.emit('remove_user', user);
    });


})

io.sockets.on('disconnection', function (socket){
    io.emit('disconnect_user');
})