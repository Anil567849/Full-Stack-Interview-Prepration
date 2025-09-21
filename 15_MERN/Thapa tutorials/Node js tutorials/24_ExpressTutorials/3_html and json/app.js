const express = require("express");
const { stringify } = require("querystring");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.write("<h1>this is my home page</h1>");
  res.send("home");
});

app.get("/about", (req, res) => {
  res.write("this is about page");

  // to stop loading more -- page load nhi hoga ab unnecessarily
  res.send();
});

app.get("/contact", (req, res) => {
  res.send("contact");
});

// json
app.get("/json", (req, res) => {
  // 1
  // res.send(
  //     // send object it will auto stringify your object and give you json
  //     {
  //         id : "1",
  //         name : "thapa"
  //     }
  // );

  // 2
  // res.send(
  //     // array of objects
  //     [
  //         {
  //             id : "1",
  //             name : "thapa"
  //         },
  //         {
  //             id : "1",
  //             name : "thapa"
  //         }
  //     ]
  // );

  // 3
  // But the main difference between res.json and res.send comes into picture when you have to pass non objects as a response. res.json will convert non objects (ex. null, undefined etc) as well which are actually not a valid JSON whereas res.send will not convert them.
  res.json([
    {
      id: "1",
      name: "thapa",
    },
    {
      id: "1",
      name: "thapa",
    },
  ]);
});

app.listen(port, () => {
  console.log("listening to the port " + port);
});
