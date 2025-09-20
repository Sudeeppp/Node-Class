const fs = require("fs");
//console.log("start");

// create file
// async

// fs.writeFile("./demo.txt", "hello world", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file created");
//     }
// });
// console.log("end");

// //synchronous
// fs.writeFileSync("./demo2.txt", "hello jspider");
// console.log("end");


//==============================================

//read file
//async

// fs.readFile("./demo2.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

//or
 
// fs.readFile("./demo2.txt",  (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// });

//synchronous

// let data = fs.readFileSync("./demo2.txt", "utf-8");
// console.log(data);


//==============================================

//update file

//async

// fs.appendFile("./demo2.txt", "welcome to node js", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file updated");
//     }
// });


//synchronous

// fs.appendFileSync("./demo2.txt", " new Text  ");
 

//==============================================

//delete file

//async

// fs.unlink("./demo.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file deleted");
//     }
// });

//synchronous

// fs.unlinkSync("./demo2.txt");


//copy

// fs.copyFile("./demo2.txt", "./copy1.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file copied");
//     }
// });

//synchronous

// fs.copyFileSync("./demo2.txt", "./copy2.txt");

//==============================================

// link(copy with reference)

//synchronous
// fs.linkSync("./demo2.txt", "./link1.txt");

//Rename (rename existing file)

//synchronous

// fs.renameSync("./demo2.txt", "./rename.txt");

//! create folder(create new folder)
//synchronous

// fs.mkdirSync("./newFolder");

//delete folder(delete existing folder)
//synchronous

// fs.rmdirSync("./newFolder");
 


