const mongoose = require('mongoose');
const validator = require('validator');


// connection with database
// if(database exist so it will use that one )else it will create new one 
mongoose.connect("mongodb://localhost:27017/usingMongoose").then(()=>{
    console.log('connection successful');
}).catch((err) => {
    console.log(err + 'error');
});

console.log('connected');







// 1
// VALIDATION USING NPM PACKAGE [VALIDATOR]
// A Mongoose schme defines the structure of the document, default values, validators, etc... 


const playListSchema = new mongoose.Schema(
    {
        name : String,
        age : Number,
        active : Boolean,

        email : {      
            type : String, 
            unique : [true, "Email is already used"],    
            // whatever user type we will get through validate(val) function 
            validate(val){
                if(!validator.isEmail(val)){
                    throw new Error("Email is invalid");
                }
            }
        },

        date : {
            type : Date,
            default : Date.now
        }
    }
)



/*
// 2
create models [creating table]
A Mongoose model is a wrapper on the Mongoose mongoose.Schema.
A Mongoose schme defines the structure of the document, default values, validators, etc... 
whereas a Mongoose model provides an interface to the database form creating, querying, updating, deleting, records etc...
*/

const Playlist = new mongoose.model("Playlist", playListSchema);







// 3
// INSERT MULTIPLE DOCUMENTS 
const createDocument = async () => {

    try{
        const phpPlayList = new Playlist(
            {
                name : "A",
                age : 2,
                active : true
            }
        )        
        
        const result = await Playlist.insertMany([phpPlayList]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}


createDocument();




