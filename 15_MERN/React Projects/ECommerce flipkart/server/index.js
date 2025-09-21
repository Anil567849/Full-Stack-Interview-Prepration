import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv';

//import components
import Connection from './database/db.js';
import DefaultData from './default.js';
import router from './routes/router.js';

const PORT = process.env.PORT || 8000;
const app = express();
dotenv.config();


app.use(bodyParser.json({exetended : true}));
app.use(bodyParser.urlencoded({exetended : true}));
app.use(cors());
app.use('/', router);


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

app.listen(PORT, () =>{
    console.log("connected with server port " + PORT);
})


//insert data into db
DefaultData();