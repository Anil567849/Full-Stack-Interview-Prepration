const os = require('os');


const architecture = os.arch();
console.log(architecture);


// RAM 
const totalMemory = os.totalmem();
console.log(totalMemory / 1024 / 1024 / 1024); // GB

// RAM 
const freeMemory = os.freemem();
console.log(freeMemory / 1024 / 1024 / 1024); // GB


// HOST NAME 
console.log(os.hostname());

// PLATFORM 
console.log(os.platform());


// PATH OF TEMP FOLDER 
console.log(os.tmpdir());

// OS
console.log(os.type());
