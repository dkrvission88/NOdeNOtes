// On== Event ko create karna or Event ko listen karna
// emit == Event ko fire karne ke liye use karte hai

const events = require("events")
const data = require('./Data')
const EventEmitter=new events()
 
EventEmitter.on("dell",()=>{
    console.log("Dell is called")

})
EventEmitter.on("data",(d)=>{
    console.log(d)

})

EventEmitter.emit("dell")
EventEmitter.emit("data",data)
EventEmitter.emit("dell")
EventEmitter.emit("dell")
EventEmitter.emit("dell")