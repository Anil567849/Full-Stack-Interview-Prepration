const mongoose = require('mongoose');



// connection with database
// if(database exist so it will use that one )else it will create new one 
mongoose.connect("mongodb://localhost:27017/usingMongoose").then(()=>{
    console.log('connection successful');
}).catch((err) => {
    console.log(err + 'error');
});

console.log('connected');






/*

// 1
//create schema with
// INBUILT VALIDATION FUNCTION
// A Mongoose schme defines the structure of the document, default values, validators, etc... 


const playListSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            //now two name same can't be insert into database
            unique : true,

            //before inserting into database it will convert into lowercase auto
            lowercase : true,
            trim : true,

            // name length 
            minlength : [2, "name must be at least 2 letter"],
            maxlength : 30
        },
        age : {
            type : Number,
            required : true,
            // enum : [20,21,22,23,24,25] age must be one of this array element
            enum : [20,21,22,23,24,25]
        },
        active : Boolean,
        date : {
            type : Date,
            default : Date.now
        }
    }
)

*/





// 2
// CREATING OUR OWN CUSTOM VALIDATORS
// A Mongoose schme defines the structure of the document, default values, validators, etc... 


const playListSchema = new mongoose.Schema(
    {
        name : String,
        age : {
            type : Number,

            // whatever user type we will get through validate(val) function 
            validate(val){
                if(val < 20){
                    throw new Error("you are not eligible")
                }
            }
        },
        active : Boolean,
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




