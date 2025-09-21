const fs = require('fs');

// fs.mkdir('anil', (err) => {
//     if(err){
//         throw err;
//     }else{
//         console.log("directory created");
//     }
// });



// fs.writeFile('anil/file.txt', "anil is amazing founder", (err) => {
//     if(err){
//         throw err;
//     }else{
//         console.log("file created");
//     }
// });

// fs.appendFile('anil/file.txt', ' appending ', (err) => {
//     if(err){
//         throw err;
//     }else{
//         console.log("appending");
//     }
// });

// fs.readFile('anil/file.txt', 'utf-8', (err, data) => {
//     if(err){
//         throw err;
//     }else{
//         console.log(data);
//     }
// });


fs.unlink('anil/file.txt', (err) => {
    if(err){
        throw err;
    }else{
        console.log("file deleted");
    }
});

fs.rmdir('anil', (err) => {
    if(err){
        throw err;
    }else{
        console.log("folder deleted");
    }
});