const express = require("express");
const path = require("path");

const app = express();

const port = 80;


// EXPRESS 
//use our static folder
app.use("/static", express.static("static"));



// PUG
//set the template engine as pug
app.set("view engine", 'pug');

//set the view directory
app.set('views', path.join(__dirname, 'views'));

// To render template files
// app.get('/', function (req, res) {
//     res.render('demo', { title: 'Hey Anil', message: 'Hello there!' })
//   })



app.get('/', function (req, res) {
    const para = {title : "index anil", content : "this is a best website"};
    res.render('index', para);
  })



//get request
app.get("/", (req, res) =>{
    res.send("this is my first express app");
});
app.get("/about", (req, res) =>{
    res.send("about, this is my first express app");
});



// get request with status code 
app.get("/about", (req, res) =>{
    res.status(200).send("about, this is my first express app");
});

app.get("/contact", (req, res) =>{
    res.status(404).send("contact, this is my first express app");
});


// post request 
app.post("/about", (req, res) =>{
    res.send("about, this is my first express app");
});

app.listen(port, ()=>{
    console.log(`success port ${port}`);
});

