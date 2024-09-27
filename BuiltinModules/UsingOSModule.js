var os = require('os')

console.log("Free Memory  ",os.freemem()/1024/1024/1024,"GB Memory");
// freemem() return total free memory in RAM

console.log("Total Memory = ",os.totalmem()/1024/1024/1024,"GB");
//totalmem() return total memory in RAM

// console.log("Home Directory : ",os.homedir());
// //return home directory of user

// console.log("OS Plateform ",os.platform());
// //return plateform of os

// console.log("OS Architectur ",os.arch());
// //return Architecture of os

console.log("Computer On Since : ",os.uptime()/60,"Minute");
//return time from windows on 

console.log("User : ",os.userInfo());
// //return user information

// console.log("OS Version ",os.version());
//return version of OS

console.log("Processor ",os.cpus());
// //retur information about processor


// console.log("Release version of OS ",os.release());
//return os relase version

console.log("OS Type ",os.type());
// // return the os name by type

