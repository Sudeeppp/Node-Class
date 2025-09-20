const events = require("events");

const eventEmitter = new events.EventEmitter();

function print() {
    console.log("hello world");  
}
function print1() {
    console.log("hello world 1");
}

//listen to event
eventEmitter.on("e1", print);
eventEmitter.addListener("e1", print1);

//emit event
//eventEmitter.emit("e1"); //execute all the functions attached to e1 event

//remove
eventEmitter.removeListener("e1", print);

//eventEmitter.emit("e1") //print event is removed

eventEmitter.removeAllListeners("e1");
eventEmitter.emit("e1"); //all are removed



