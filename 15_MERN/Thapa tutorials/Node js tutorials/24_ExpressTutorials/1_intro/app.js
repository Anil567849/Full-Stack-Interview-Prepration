const express = require('express');
const app = express();


// mostly used methods 
// get, post, put [update], delete 

app.get("/", (req, res) =>{ // home page
    res.send('hello express');
});

app.listen(8000, () => {
    console.log('connected');
});