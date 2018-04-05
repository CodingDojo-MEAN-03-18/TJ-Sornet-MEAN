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

let num = 0;
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // all the server socket code goes in here
    socket.on("got_a_new_user", function(name){
        io.emit('new_user', name);
    });

})

io.sockets.on('disconnection', function (socket){
    io.emit('disconnect_user');
})