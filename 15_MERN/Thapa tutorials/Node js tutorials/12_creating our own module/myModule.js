

// by default it scope is private 
const add = (a, b) =>{
    return a + b;
};


const sub = (a, b) =>{
    return a - b;
};


const name = "Anil";
// 1
// make public scope -- use this for only if you have only one variable or function etc
// either use add or name but you are unable to use both -- because there is no way to access them 

// module.exports = add;
// module.exports = name;


// 2
// it works for multiple -- this is a objects
// module.exports.addKro = add; // key can be anything but value name should be same i.e addKro[key] = add[value]
// module.exports.name = name;


// 3
// for multiple -- this is a objects -- single line
module.exports = {add, name, sub};