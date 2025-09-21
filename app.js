const { Socket } = require("dgram");
const express = require("express");
const app = express();
const http = require("http")
const path =require("path")
const socketio = require("socket.io")
 
const server = http.createServer(app)
 
const io = socketio(server)

io.on("connection",function (socket) {
    console.log("connected"); 
    socket.on("send-location",function (data){
        io.emit("receive-loction",{id:socket.id,...data})
    })
    socket.on("dissconnect",function(){
        io.emit("user-disconnected",socket.id)
    })
})

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,"public")))

app.get("/", function (req, res) {
  res.render("index"); 
});
app.get("")
server.listen(3000);
  