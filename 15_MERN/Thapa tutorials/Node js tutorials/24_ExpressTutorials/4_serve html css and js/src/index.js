const path = require('path');
const express = require('express');

const app = express();

// paths 
// 1 relative path
// ../public/index.html etc.

// 2 absolute path 
// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");

//built in middleware to server static file (html, css, js)
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("home");
})

app.listen(8000, () => {
    console.log('listening');
});