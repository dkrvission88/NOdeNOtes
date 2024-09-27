// What Socket.IO is
// Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.

// console.log("Hello World");
const io=require("socket.io")(8000)
let users={}
io.on("connection",(socket)=>{
    socket.on("new-user-joined",()=>{
        users[socket.id]=name
        socket.broadcast.emit("user-joined",name)

    })
    socket.on("send",(message)=>{
        socket.broadcast.emit("receive",{message:message,name:users[socket.id]})

    })
    socket.on("disconnect",(message)=>{
        socket.broadcast.emit("left",{name:users[socket.id]})
        delete users[socket.id]

    })
})