const fs = require("fs");

//it creates a file it not exist and write data there or if already exits it write there 
fs.writeFileSync("anil.txt", "anil is a great coder");


// again it will remove all data and write new data -- override all instead of appending 
fs.writeFileSync("anil.txt", "remove all data and add this");


//appending text
fs.appendFileSync("anil.txt", " append this");









//read 
const buffer_data = fs.readFileSync("anil.txt", "utf-8");

// buffer data mainly used to store binary data 
console.log(buffer_data);

//print original data (human readable)
console.log(buffer_data.toString());









// rename 
fs.renameSync("anil.txt", "renamedAnil.txt");