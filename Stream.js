// stream ===Streams are objects that let  you read data from  source or write data to a Destination in continous 
// using stream we read and write the file


// streaming  means listening a music or watching videos in real time instead of downloading a to our computer and watching it later
//Node js having Four Types of stream

// 1. Readable  = stream which is use for Read Operation

// 2. writable = stream which is use for write operation

// 3. Duplex  = Stream which is use for both read and write Operation

// 4. Transform = a type of duplex stream where output is computed based on input

//  Each type of stream is in  event emitter instance and through several events at different instance of time

// 1. Data = this event is fired when there is data availabel to read

// 2. end = this event is fired when there is no mre data to read

// 3. error = this event is fired when there is an error while reading or writting data

// 4. finish = this event is fired when all the data has been flushed  to underline system

// const fs=require("fs")
// const readStream=fs.createReadStream("./data.json","utf-8")
// readStream.on("data",(data)=>{
//     console.log("data is received");
// })
// readStream.on("end",(data)=>{
//     console.log("No more data to read");
// })
// readStream.on("error",(error)=>{
//     console.log(error);
// })
// readStream.on("finish",(data)=>{
//     console.log("Done");

// })




const { log } = require("console")
const http=require("http")
let port=8000


const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("<h1>This is Home Page !!!!</h1>")

    }else if(req.url=="/data"){
        const fs=require("fs")
        const readStream=fs.createReadStream("./data.json","utf8")

        readStream.pipe(res)
        // readStream.on("data",(mmd)=>{
        //     // console.log("Data is received");
        //     res.write(mmd)
        // })
        // readStream.on("end",()=>{
        //     res.end("Done");

        // })
        // readStream.on("error",(error)=>{
        //     res.writeHead(500)
        //     res.end("internal server Error");
        // })

        // readStream.on("finish",(data)=>{

        // })

    }else{
        res.writeHead(404)
        res.end("<h1> 404 page not found !!!! Internal Server Error </h1>")
    }

})


server.listen(port,"localhost",()=>{
    console.log(`server is Running on port ${port}`);

})


