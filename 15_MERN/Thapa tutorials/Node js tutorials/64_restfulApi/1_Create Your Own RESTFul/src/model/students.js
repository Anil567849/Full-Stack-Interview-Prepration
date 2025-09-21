const mongoose = require('mongoose');

const validator = require('validator');

const studentsSchema = new mongoose.Schema({

    name : {
        type : String, 
        unique : [true, "type another name"],
        minlength : 3, 
        maxlength : 40
    },
    email : {
        type : String, 
        unique : [true, "type another email"],
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("invalid email");
            }
        }
    },
    phone : {
        type : Number,
        required : true,
        unique : true
    }, 
    address : {
        type : String,
        required : true
        
    }

});





// creating a collection [table]
const Student = new mongoose.model('Student', studentsSchema);

module.exports = Student;






