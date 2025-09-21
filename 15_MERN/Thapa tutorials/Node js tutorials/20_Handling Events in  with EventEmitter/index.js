const EventEmitter = require('events');

const event = new EventEmitter();

event.on('sayMyName', ()=>{
    console.log('my name is Anil.');
});


event.on('sayMyName', ()=>{
    console.log('my name is Thapa.');
});



event.emit('sayMyName');




// with parameter
event.on('checkPage', (statusCode, statusResponse) => {
    console.log(`code is ${statusCode} and status response is ${statusResponse}`);
})

event.emit('checkPage', 200, "ok");




