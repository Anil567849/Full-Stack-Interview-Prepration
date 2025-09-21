// 1
// USE ONE BY ONE OTHER U WILL GET AN ERROR -- because this is not an object 
// const add = require("./myModule");
// const name = require("./myModule");
// const temp = add(10, 15); 
// console.log(temp); 
// console.log(name);



// 2
// YOU CAN USE IT FOR MULTIPLE VARIBLE AND FUCTIONS -- this is an objects
// const myModule = require('./myModule');

// console.log(myModule);

// const a = myModule.addKro(19, 1);
// console.log(a);

// console.log(myModule.name);


// 3
// DIRECTION ACCESS -- OBJECT DESTRUCTING
const {sub, add, name} = require('./myModule'); // ORDER DON'T MATTER HERE YOU CAN ACCESS ANYTHING ANYWHERE i.e sub, add, name or name, sub, add etc.
console.log(add(10, 2));
console.log(name);
console.log(sub(10, 2));
