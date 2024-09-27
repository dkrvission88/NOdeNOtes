/*
fs module : used to perform operations regarding file handling
file Handling/file Input Output Operations:
    1. Creating a new File or Folder
    2. Writing Data into a file
    3. Appending Data into a file
    4. Reading Data from a file
    5. Rename a file
    6. Delete a file
    7. Delete a folder
 */

const fs = require('fs')

/*
mkdir():     used to create a folder, it throw an error is folder
             exist or Path is Invalid
 */

             fs.mkdir("sample",(error)=>{
                if(error)
                console.log("Invalid path that given by you")
            else
            console.log("Folder created successfully")
             })




fs.mkdir("sample",(error)=>{
    if(error)
    console.log("Folder is Already exist or Invalid Path");
    else
    console.log("Folder is Created")
})
console.log("Done")

/*
rmdir():     used to delete a folder, it throw an error is folder
             does not exist or Path is Invalid or folder is not Empty
 */

// fs.rmdir("sample",(error)=>{
//     if(error){
//         // console.log(error.code);
//         if(error.code=="ENOTEMPTY")
//         console.log("Folder Is Not Empty Can't Delete");
//         else
//         console.log("Folder Does not Exist or Invalid Path");
//     }
//     else
//     console.log("Folder is Deleted")
// })


/*
writeFile():    used to write data into a file, if file doesn't exist
            is create a new file, and if file already exist,
            it delete a old data from file and rewrite new data
            into file
 */
// fs.writeFile("sample/mytext.txt","Hello World1\n",(error)=>{
//     if(error)
//     console.log("Invalid Path");
//     else{
//         fs.writeFile("sample/mytext.txt","Hello World2\n",()=>{})
//         fs.writeFile("sample/mytext.txt","Hello World3\n",()=>{})
//         fs.writeFile("sample/mytext.txt","Hello World4\n",()=>{})
//         fs.writeFile("sample/mytext.txt","Hello World5\n",()=>{})
//         console.log("Data writing Process Complete");
//     }
// })


/*
appendFile():    used to append data into a file, if file doesn't exist
            is create a new file, and if file already exist,
            it write new data after old data into file
//  */
// fs.appendFile("sample/mytext.txt", "Hello World1\n", (error) => {
//     if (error)
//         console.log("Invalid Path");
//     else {
//         fs.appendFile("sample/mytext.txt", "Hello World2\n", () => { })
//         fs.appendFile("sample/mytext.txt", "Hello World3\n", () => { })
//         fs.appendFile("sample/mytext.txt", "Hello World4\n", () => { })
//         fs.appendFile("sample/mytext.txt", "Hello World5\n", () => { })
//         console.log("Data writing Process Complete");
//     }
// })


/*
readFile(): used to read data from a file, if we not provide encryption
            it return buffer data so to decrypty provide utf-8
 */

// fs.readFile("sample/mytext.txt","utf-8",(error,data)=>{
//     if(error)
//     console.log("Invalid Path or File Dosn't Exist");
//     else
//     console.log(data)
// })


/*
rename()    :   used to rename a file, it throw an error is file 
                doesn't exist or invalid Path
 */

// fs.rename("sample/mytext.txt","sample/example.txt",(error)=>{
//     if(error)
//     console.log("File Does not Exist or Invalid Path")
//     else
//     console.log("file is renamed");    
// })
/*

unlink()    :   used to delete a file, it throw an error is file 
                doesn't exist or invalid Path
 */

// fs.unlink("sample/example.txt",(error)=>{
//     if(error)
//     console.log("File Does not Exist or Invalid Path")
//     else
//     console.log("file is deleted");    
// })
                

