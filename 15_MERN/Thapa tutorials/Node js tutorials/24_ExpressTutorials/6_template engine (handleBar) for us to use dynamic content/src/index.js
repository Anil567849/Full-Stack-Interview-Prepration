const path = require('path');
const express = require('express');

const app = express();



app.set("view engine", "hbs");

// template engine route 
//res.render is use for template engine to server static files as res.send() is use for express
app.get("/", (req, res) => {
    // res.render("index.hbs");

    // show objects 
    res.render("index.hbs",
        {
            nameOfAuthor : "Thapa"
        }
    );
});

// home page already servered by view engine so this piece of code never execute but write to avoid and error .
app.get("/", (req, res) => {
    res.send('hello from express');
});


app.listen(8000, () => {
    console.log('listening');   
});