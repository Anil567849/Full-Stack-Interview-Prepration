
const mongoose = require('mongoose');


const DB = process.env.DATABASE_URL;


mongoose.connect(DB).then(()=>{
    console.log("db success");
}).catch((err) => {
    console.log("error db " + err)
})