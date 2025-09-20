const { log } = require("console");
const os = require("os");

console.log(os.arch());//x64
console.log(os.cpus().length);//4
console.log(os.hostname()); //DESKTOP-KEUPJNL
console.log(os.version()); //Windows 11 Home Single Language
console.log(os.platform());//win32
console.log(os.totalmem());//4066164736
console.log(os.freemem());// 417558528
console.log(os.type()); //Windows_NT





