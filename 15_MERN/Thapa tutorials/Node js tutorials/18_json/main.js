const fs = require('fs');

const obj = {
    name : "Anil",
    age : "21"
};

/*
console.log(obj.name);

// 1
// convert js object to json 
const jsonData = JSON.stringify(obj);

console.log(jsonData);


// 2
// convert json to object 
const objData = JSON.parse(jsonData);
console.log(objData);
*/



// challenge 

const jsonData = JSON.stringify(obj);

fs.writeFile('jsonData.txt', jsonData, (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log('saved');
    }
});


fs.readFile('jsonData.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});



const objData = JSON.parse(jsonData);

console.log(objData);








