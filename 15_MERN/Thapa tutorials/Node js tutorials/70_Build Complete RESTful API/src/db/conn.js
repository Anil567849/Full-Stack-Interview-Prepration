const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/olympic").then( () =>{
    console.log("db connected");
}).catch( (err) => {
    console.log("mongoose not connected");
});