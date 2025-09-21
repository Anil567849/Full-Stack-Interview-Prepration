const dotenv = require('dotenv');
const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')

//dot env
dotenv.config({path : "./config.env"});
const PORT = process.env.PORT;

//db
require('./db/conn');


//json
app.use(express.json());
app.use(cookieParser())

//route
app.use(require('./router/auth'));

app.listen(PORT, (err) => {
    console.log("listening to port " + PORT);
})
