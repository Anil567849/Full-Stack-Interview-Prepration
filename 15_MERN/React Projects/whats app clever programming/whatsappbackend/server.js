import express  from 'express';
import mongoose from 'mongoose';
import Pusher from 'pusher';
import cors from 'cors';

import Messages from './dbMessages.js';

const app = express();
const PORT = process.env.PORT || 8000;



// use middlewares 
app.use(express.json());
app.use(cors());

// use app.use(cors()); instead of this code 
// app.use((req, res, next)=>{

//     res.setHeader("Allow-Control-Allow_Origin", "*");
//     res.setHeader("Allow-Control-Allow-Headers", "*");

//         next();
// })





const url = ""

mongoose.connect(url);

const db = mongoose.connection;

db.once('open', () => {
    console.log("db connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change) => {
        // console.log(change);
        if(change.operationType == 'insert'){

            const messageDetails = change.fullDocument;

            pusher.trigger("messages", 'inserted', {
                name : messageDetails.name,
                message : messageDetails.message,
                timestamp : messageDetails.timestamp,
                received : messageDetails.received
            })

        }else{
            console.log("change err");
        }
    })

})


const pusher = new Pusher({
    appId: "1295137",
    secret: "c674777db6f1abbf127d",
    key: "e2ff8430b019f490ea46",
    cluster: "ap2",
    useTLS: true
  });
  


  mongoose.connection


app.get('/', (req, res)=>{
    res.status(200).send('hello world');
})


app.post("/messages/new", (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})


app.get("/messages/sync", (req, res) => {
    Messages.find((err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

app.listen(PORT, ()=> {
    console.log("connected to port " + PORT);
})