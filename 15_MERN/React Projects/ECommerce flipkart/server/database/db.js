
import mongoose from 'mongoose';



const Connection = async (username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@ecommerce.dljds.mongodb.net/ecommerce?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useNewUrlParser : true, useUnifiedTopology : true});
        console.log("db connected");
    }catch(err){
        console.log("err db " + err.message);
    }

}

export default Connection;