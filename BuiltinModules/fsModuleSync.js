// const { error } = require("console");
let fs = require("fs");

//mkdirSync() : used to create a folder

// try {
//   fs.mkdirSync("hshsh");
// } catch (error) {
//   console.log(error);
//   console.log("Folder is Alrady Exist!!");
// }

// rmdirSync() :used to delete a folder

// try{
//     fs.rmdirSync("sample")
// }
// catch(error){
//     console.log("Invalid Path or Folder Already Deleted!!!");
// }

/*
writeFileSync()
create a new file if file doesn't exist, and if file already exist
it delete all content of file and re-write data into it
*/
try{
  fs.writeFileSync("sample/Data.txt","welcome you 1\n")
  fs.writeFileSync("sample/Data.txt","welcome you 2\n")
  fs.writeFileSync("sample/Data.txt","welcome you 3\n")
  fs.writeFileSync("sample/Data.txt","welcome you 4\n")
  fs.writeFileSync("sample/Data.txt","welcome you 5\n")

}catch(error){
  console.log("Invalid Path !!!")

}
/*
appendFileSync()
create a new file if file doen't exist, and if file already exist
it write data after old data
*/

// fs.appendFileSync("sample/Data.txt","hello 1\n" )
// fs.appendFileSync("sample/Data.txt","hello 2\n")
// fs.appendFileSync("sample/Data.txt","hello 3\n")
// fs.appendFileSync("sample/Data.txt","hello 4\n")
// fs.appendFileSync("sample/Data.txt","hello 5\n")
// fs.appendFileSync("sample/Data.txt","hello 6\n")



/*
readFileSync()
read a file and return data 
if we not use any encoding then data is return in buffer format
to encode use 'utf-8'
 */
// try{
//   let store=fs.readFileSync("sample/Data.txt","utf-8")
//   console.log(store);
// }catch(error){
//   console.log("Invalid Path !!!")
// }


// fs.renameSync():used to rename a file
// try{
//   fs.renameSync("sample/Data1.txt","sample/Da.txt")
// }catch(error){
//   console.log("Invalid Path !!!")
// }

//unlinkSync() : used to delete a file
// fs.unlinkSync("sample/Da.txt",(error)=>{
//   if(error)
//     console.log("Invalid Path !!!")
//   else
//   console.log("File Deleted !!!")
// })

// fs.rmdirSync("sample")
