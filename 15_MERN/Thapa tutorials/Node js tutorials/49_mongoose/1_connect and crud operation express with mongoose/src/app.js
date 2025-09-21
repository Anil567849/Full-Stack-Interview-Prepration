const mongoose = require('mongoose');



// connection with database
// if(database exist so it will use that one )else it will create new one 
mongoose.connect("mongodb://localhost:27017/usingMongoose").then(()=>{
    console.log('connection successful');
}).catch((err) => {
    console.log(err + 'error');
});

console.log('connected');








// 1
//create schema
// A Mongoose schme defines the structure of the document, default values, validators, etc... 


const playListSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        }, 
        age : Number,
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






/*
// 3
// INSERT ONLY ONE DOCUMNT 
// insert document [row and cols]

const reactPlayList = new Playlist(
    {
        name : "Anil",
        age : 21,
        active : true
    }
)


reactPlayList.save();
*/



/*
// 4
// INSERT ONLY ONE DOCUMNT 
// insert document [row and cols]
// using async await
// save function take time to save in database so use async await 
const createDocument = async () => {

    try{
        const reactPlayList = new Playlist(
            {
                name : "Anil 1",
                age : 21,
                active : true
            }
        )        
        
        const result = await reactPlayList.save();
        console.log(result);

    }catch(err){
        console.log(err);
    }
}


createDocument();

*/








/*
// 5
// INSERT MULTIPLE DOCUMENTS 
const createDocument = async () => {

    try{
        const reactPlayList = new Playlist(
            {
                name : "Anil 1",
                age : 21,
                active : true
            }
        )  
        const jsPlayList = new Playlist(
            {
                name : "Anil 2",
                age : 21,
                active : true
            }
        )  
        const nodejsPlayList = new Playlist(
            {
                name : "Anil 3",
                age : 21,
                active : true
            }
        )  
        const phpPlayList = new Playlist(
            {
                name : "Anil 4",
                age : 21,
                active : true
            }
        )        
        
        const result = await Playlist.insertMany([reactPlayList, jsPlayList, nodejsPlayList, phpPlayList]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}


createDocument();
*/










/*
// 6

const getDocuments = async ()=>{

    /*
    // 1
    try{
        const result = await Playlist.find();
        console.log(result);
    }catch(err){
        console.log(err);
    }
    */



    /*
    // 2
    // FILTER 
    try{
        const result = await Playlist.find({age : 21});
        console.log(result);
    }catch(err){
        console.log(err);
    }
    */


    /*
    // 3
    // PROJECTIONS
    // fetch only name column
        try{
            const result = await Playlist.find({age : " 21"}).select({name : 1});
            console.log(result);
        }catch(err){
            console.log(err);
        }
    */
/*
    // LIMIT
    // 4
    try{
        const result = await Playlist.find({age : " 21"}).select({name : 1}).limit(1);
        console.log(result);
    }catch(err){
        console.log(err);
    }



    console.log(result);

}

getDocuments();

*/





/*
// 7
// COMPARISION QUERY OPERATOR
const getDocuments = async ()=>{

    // GREATER THAN
    // 1
    try{
        const result = await Playlist.find({age : {$gt : 30}});
        console.log(result);
    }catch(err){
        console.log(err);
    }

    // GREATER THAN EQUALS TO
    // 2
    try{
        const result = await Playlist.find({age : {$gte : 30}});
        console.log(result);
    }catch(err){
        console.log(err);
    }


    // LESS THAN
    // 3
    try{
        const result = await Playlist.find({age : {$lt : 30}});
        console.log(result);
    }catch(err){
        console.log(err);
    }

    // LESS THAN EQUALS TO
    // 4
    try{
        const result = await Playlist.find({age : {$lte : 30}});
        console.log(result);
    }catch(err){
        console.log(err);
    }

    // EQUALS TO EQUALS TO
    // 5
    try{
        const result = await Playlist.find({age : {$eq : 30}});
        console.log(result);
    }catch(err){
        console.log(err);
    }


    	
    // Matches any of the values specified in an array.
    // 6
    try{
        const result = await Playlist.find({skill : {$in : ["android", "c++"]}});
        console.log(result);
    }catch(err){
        console.log(err);
    }

            
    // Matches none of the values specified in an array.
    // ruby and scala develops won't show in this example   
    // 7
    try{
        const result = await Playlist.find({skill : {$nin : ["scala", "ruby"]}});
        console.log(result);
    }catch(err){
        console.log(err);
    }



}

getDocuments();
*/





/*
// 8
// LOGICAL OPERATOR 
const getDocuments = async ()=>{
/*
    // OR OPERATOR
    // 1
    try{
        const result = await Playlist.find( {   $or : [{name : "Anil"}, {age : 30}] }   );
        console.log(result);
    }catch(err){
        console.log(err);
    }
*/


/*
    // AND OPERATOR
    // 2
    try{
        const result = await Playlist.find( {   $and : [{name : "Anil"}, {age : 30}]    }   );
        console.log(result);
    }catch(err){
        console.log(err);
    }
*/

/*
    // 3
    // NOT OPERATOR
   	// Inverts the effect of a query expression and returns documents that do not match the query expression. 
       try{
        const result = await Playlist.find( {   $not : [{name : "Anil"}, {age : 30}]    }   );
        console.log(result);
    }catch(err){
        console.log(err);
    }
*/

/*
    // 4
        // NOR OPERATOR
   	// Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
       try{
        const result = await Playlist.find( {   $nor : [{name : "Anil"}, {age : 30}]    }  );
        console.log(result);
    }catch(err){
        console.log(err);
    }



}

getDocuments();
*/






/*
// 9
// COUNT 
const getDocuments = async ()=>{
  
        // GET COUNT
        // 1
        try{
            const result = await Playlist.find({    $or : [ {name : "Anil"}, {age : 30} ]   }).countDocuments();
            console.log(result);
        }catch(err){
            console.log(err);
        }
  
        // GET COUNT
        // 1
        try{
            const result = await Playlist.find({name : "Anil 1"}).countDocuments();
            console.log(result);
        }catch(err){
            console.log(err);
        }

        
    }
    
    getDocuments();
*/




/*

// 9
// SORT
const getDocuments = async ()=>{
  /*
        //SORT ASCENDING
        // 1
        try{
            const result = await Playlist.find({    $or : [ {name : "Anil"}, {age : 30} ]   }).sort({name});
            console.log(result);
        }catch(err){
            console.log(err);
        }
*/
/*  
        //SORT ASCENDING
        // 1
        try{
            const result = await Playlist.find().sort({name : 1});
            console.log(result);
        }catch(err){
            console.log(err);
        }
  
        //SORT DESENDING
        // 1
        try{
            const result = await Playlist.find().sort({name : -1});
            console.log(result);
        }catch(err){
            console.log(err);
        }

        
    }
    
    getDocuments();

*/









/*
// UPDATE 
const updateDocument = async (userId) => {

/*
    // 1
    try{
        const result = await Playlist.updateOne({_id : userId}, {$set : {name : "Elon Musk"}});
        console.log(result);
    }catch(err){
        console.log(err);
    }


    // SAME 
    // {new : true} = it will show u recently updated value in console or in your page
    try{
        const result = await Playlist.updateOne({_id : userId}, {$set : {name : "Elon Musk"}}, {new : true});
        console.log(result);
    }catch(err){
        console.log(err);
    }
*/  
/*

    // 2
    // SAME WORK LIKE ABOVE
    // useFindAndModify : false = to ignore depricate 
    // {new : true} = it will show u recently updated value in console or in your page
    try{
        const result = await Playlist.findByIdAndUpdate({_id : userId}, {$set : {name : "Elon Musk 2"}}, {new : true, useFindAndModify : false});
        console.log(result);
    }catch(err){
        console.log(err);
    }

}

updateDocument("61657bba1cdba7af8eacde7b")

*/














// DELETE 

const deleteDocument = async (userId) => {

    /*
    try{
        const result = await Playlist.deleteOne({_id : userId});
        console.log(result);
    }catch(err){
        console.log(err);
    }
    */


    // IT WILL GIVE YOU WHOLE DATA OF DELETED DOCUMENT
    try{
        const result = await Playlist.findByIdAndDelete({_id : userId});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

deleteDocument("6165819c9b6c2eb4630af7f3");




