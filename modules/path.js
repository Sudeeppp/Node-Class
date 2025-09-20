const path = require("path");

let mypath = "myfolder/path.txt";

console.log(path.dirname(mypath)); //myfolder
console.log(path.basename(mypath)); //path.txt
console.log(path.extname(mypath)); // .txt

// dynamic joining of path
const newpath = path.join("parentFolder", mypath);
console.log(newpath); //parentFolder\myfolder\path.txt


// system separator
console.log(path.sep);// \---------------------------------