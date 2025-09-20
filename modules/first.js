console.log("start");

for (let i = 0; i <= 5; i++){
    console.log(i);
    
}

setTimeout(() => {
    console.log("time out function");
    
}, 2000)

setInterval(() => {
    console.log("interval Function");
    
}, 3000)
console.log("end");

