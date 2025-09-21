const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const userSchenma = new mongoose.Schema({
    name : {
        type : String, 
        unique : true,
    },
    email : {
        type : String,
        unique : true,
    },
    password : {
        type : String
    },
    pic : {
        type : String,
        default : "https://res.cloudinary.com/anil567849cloudinary/image/upload/v1635174247/lfikhsh0duz95jzp0kvu.jpg"
    },
    followers : [
        {
            type : ObjectId,
            ref : "User"
        }
    ],
    following : [
        {
            type : ObjectId,
            ref : "User"
        }
    ]
});


mongoose.model('User', userSchenma);

// const User = new mongoose.model('User', userSchenma);
// module.exports = userModel;