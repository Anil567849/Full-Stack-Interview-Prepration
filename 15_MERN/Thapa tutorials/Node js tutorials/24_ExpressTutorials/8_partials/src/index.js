const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();


// to set the view engine 
app.set('view engine', 'hbs');

const viewPath = path.join(__dirname, "../myviews/views");
app.set("views", viewPath);

const partialsPath = path.join(__dirname, "../myviews/partials");
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render("index.hbs", {
        nameOfAuthor : "Thapa"
    });
});

// home page already servered by view engine so this piece of code never execute.
app.get("/", (req, res) => {
    res.send('hello from express');
});



// WROTE THIS LINE ALWAYS BE AT LAST 
// if any wrong url found like www.upcarz.com/asdfsad
app.get('*', (req, res) => {
    res.render("error.hbs", {
        showError : "page not exists"
    });
});

// www.upcarz.com/about/laskjf
app.get('/about/*', (req, res) => {
    res.render("error.hbs", {
        showError : "about page not exists"
    });
});


app.listen(8000, () => {
    console.log('listening');
});