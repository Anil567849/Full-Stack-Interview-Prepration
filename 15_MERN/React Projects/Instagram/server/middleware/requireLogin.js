const { JWT_SECRET_TOKEN } = require("../keys");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");








module.exports = (req, res, next) => {
  const { authorization } = req.headers;


  // console.log(authorization);

  if (!authorization) {
    return res.status(401).json({ error: "you must be logged in 1" });
  }


  // REMOVE Bearer and space and get token 
  // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, JWT_SECRET_TOKEN, (err, decoded) => {

    //TOKEN WRONG
    if (err) {
      return res.status(401).json({ error: "you must be logged in 2" });
    } 

    console.log(decoded);

    //WE SENT ID WHEN jwt.sign() in auth.js        now get id
    const { _id } = decoded;
    User.findById(_id).then((userData) => {
      req.user = userData;
      next();
    });
  });
};
