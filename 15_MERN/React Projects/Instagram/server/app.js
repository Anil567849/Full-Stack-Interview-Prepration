const express = require('express');
const mongoose = require('mongoose');
const app = express();      
const port = process.env.PORT || 5000;
const {MONGOURI} = require('./keys');
app.use(express.json());

//DATABASE
mongoose.connect(MONGOURI).then( () => {
    console.log("connected with db ");
}).catch( (err) => {
    console.log("error with db " + err);
})


/*
mongoose.connection.on("connected", () => {
    console.log("connected to database");
})

mongoose.connection.on("error", (error) => {
    console.log("error with database " + error);
})
*/

require('./models/user');
require('./models/post');




// ROUTES 
app.use(require('./routes/auth'));
app.use(require('./routes/post'));
app.use(require('./routes/user'));







app.listen(port, () => {
    console.log("listening to server " + port); 
})