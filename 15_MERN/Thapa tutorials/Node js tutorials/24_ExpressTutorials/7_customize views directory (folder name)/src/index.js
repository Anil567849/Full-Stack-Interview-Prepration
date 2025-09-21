const path = require('path');
const express = require('express');

const app = express();




app.set("view engine", "hbs");

//change views folder name 
const Myviews  = path.join(__dirname, "../myviews/views")
app.set("views", Myviews);


// template engine route 
//res.render is use for template engine to server static files as res.send() is use for express
app.get("/", (req, res) => {
    // res.render("index.hbs");
    res.render("index.hbs", {
        nameOfAuthor : "Anil"
    });
});

// home page already servered by view engine so this piece of code never execute
app.get("/", (req, res) => {
    res.send('hello from express');
});


app.listen(8000, () => {
    console.log('listening');   
});