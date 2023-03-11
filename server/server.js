const express = require("express");
const app = express();

// import { Socket } from "dgram";
//import {createServer} from "http";
//const createServer = require("http")
//import {Server} from "socket.io";
//const Server = require("socket.io")
const httpServer = require("http").createServer(app)
// const io = new Server (httpServer,{

// });
const io = require("socket.io")(httpServer,{
    cors: {
        origin: "*",
        // methods: ["GET","POST"],
        // allowedHeaders: ["Authorization"],
        // credentials: true
      },
    
});

io.on("connection",(socket)=>{
    console.log("what is socket : ",socket);
    socket.on("chat",(payload)=>{
        console.log("the payload is :",payload);
        io.emit("chat",payload)
    })
});

httpServer.listen(3000,()=>{
    console.log("server is running on port 3000");
})