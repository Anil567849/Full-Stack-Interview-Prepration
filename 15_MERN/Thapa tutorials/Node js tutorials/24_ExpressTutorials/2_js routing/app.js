const express = require("express");
const { stringify } = require("querystring");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.write("this is about page");

  // to stop loading more -- page load nhi hoga ab unnecessarily
  res.send();
});

app.listen(port, () => {
  console.log("listening to the port " + port);
});
