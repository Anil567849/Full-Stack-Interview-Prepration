const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/studentsApi").then( () => {

    console.log("connection successful with db");

}).catch( (err) => {
    console.log("connection failed db " + err);
});