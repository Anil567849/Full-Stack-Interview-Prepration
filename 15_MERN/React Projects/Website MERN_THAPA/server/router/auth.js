const express = require("express");

const router = express.Router();

const bcrypt = require('bcryptjs');
 
const authenticate = require('../middleware/authenticate');

require("../db/conn");

const User = require("../model/userSchema");


router.get("/home", authenticate, async (req, res) => {
  // console.log("called");
  res.send(req.rootUser);

});

router.post("/register", (req, res) => {
  // console.log(req.body);

  const { name, password, cpassword, phone, email, work } = req.body;

  // console.log(name);
  // console.log(password);k
  // console.log(work);

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please Fill All Field" });
  }

  User.findOne({ email: email }).then((userExist) => {
    if (userExist) {
      return res.status(422).json({ error: "user already exists" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "user invalid" });
    }

    const t = new User(req.body);

    t.save()
      .then(() => {
        return res.status(201).json({ message: "user created successfully" });
      })
      .catch((err) => {
        return res.status(500).json({ error: "failed register " + err });
      });
  });
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ err: "please fill all fields" });
  }

  // console.log(email, password);

  try {
    const result = await User.findOne({ email: email });
    // console.log(result);
    if (result) {

        const token = await result.generateAuthToken();

        res.cookie("jwttoken", token, {
            httpOnly : true
        });

        // console.log(token);

      bcrypt.compare(password, result.password, function (err, r) {
        if (!err) {
          return res.status(200).json({ message: "logged in successfully" });
        }else {
            return res.status(422).json({ error: "signin auth.js " + err });
        }
      });


    } else {
      return res.status(422).json({ error: "invalid credentials" });
    }
  } catch (error) {
    console.log("error auth.js " + error);
  }
});


router.get('/about',authenticate, (req, res) => {
  // console.log("root " + req.rootUser);
  // console.log(req.rootUser);

  //this response goes to client About.js
  res.send(req.rootUser);
})


router.get('/getData', authenticate, (req, res) => {
  res.send(req.rootUser);
})


router.post('/contact',authenticate, async (req, res) => {

  const {name, email, phone, message} = req.body;

  if(!name || !email || !phone || !message){
    return res.status(422).json({err : "fill all fields"});
  }

  try{

    const userContact = await User.findOne({_id : req.userId});

    if(userContact){
      const userMessage = await userContact.addMessage(name, email, phone, message);

      if(userMessage){
        return res.status(200).json({message : "contact message send successfully"});
      }else{
        return res.status(400).json({err : "something went wrong auth.js"});
      }

    }

  }catch(err){
    console.log(err + "auth.js");
    return res.status(400).json({err : "something went wrong auth.js " + err});

  }

})



router.get('/logout', (req, res) => {
  console.log("log out");
  res.clearCookie('jwttoken', {path : '/'});
  res.status(200).send("User Logout");
})

module.exports = router;
