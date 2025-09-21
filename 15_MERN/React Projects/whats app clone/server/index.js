import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import route from './routes/Route.js';
import cors from 'cors';
dotenv.config()


const app = express();

const PORT = 8000;


app.use(cors());
app.use(express.json());
app.use('/', route);

Connection();
app.listen(PORT, () => {
    console.log('server is running at ' + PORT);
})