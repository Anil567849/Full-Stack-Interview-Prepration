import mongoose from 'mongoose';


const Connection = async ()=> {
    const URL = process.env.DB_URL;
    try {
        await mongoose.connect(URL, {useUnifiedTopology : true, useNewUrlParser : true});
        console.log('db connected');
    } catch (error) {
        console.log('db not connected ' + error);
    }
}


export default Connection;