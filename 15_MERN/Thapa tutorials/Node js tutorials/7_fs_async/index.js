const fs = require('fs');


fs.writeFile('anil.txt', "anil is going to change the world for best", (err)=>{
    if(err){
        throw err;
    }else{
        console.log("saved");
    }
});


fs.appendFile('anil.txt', " appending ", (err)=>{
    if(err){
        throw err;
    }else{
        console.log("appended");
    }
});


fs.readFile('anil.txt', 'utf-8', (err, data)=>{
    if(err){
        throw err;
    }else{
        console.log(data);
    }
});