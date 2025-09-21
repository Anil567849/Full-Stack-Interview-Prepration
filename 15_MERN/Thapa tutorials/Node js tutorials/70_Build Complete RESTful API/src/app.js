const express = require("express");

require("./db/conn.js");

const router = require("./router/men");

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
    res.send("Hello Express");
});





app.listen(port, () => {
    console.log("listening " + port);
});