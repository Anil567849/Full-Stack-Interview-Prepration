const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET_TOKEN} = require('../keys');

router.post('/signup', (req, res) => {
    // console.log(req.body.name);
    const {name, email, password, pic} = req.body;

    if(!name || !email || !password){
        return res.status(422).json({error : "Please fill all fields"});        
    }
    

    User.findOne({email : email}).then( (savedUser) => {
        if(savedUser){
            return res.status(422).json({error : "User already exists"});
        }

        bcrypt.hash(password, 10).then((hashPassword)=>{
            const newUser = new User({
                name : name,
                email : email,
                password : hashPassword,
                pic : pic
            })
    
            newUser.save().then( () => {
                res.status(200).json({message : "user created successfully"})
            }).catch( (err) => {
                console.log("error " + err);
            })
        }).catch((err)=>{
            console.log(err);
        })


    }).catch( (err) => {
        // res.json({error : err});
        console.log("error findone " + err);
    })

});



router.post('/signin', (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(422).json({error : "Please add email and password"});
    }

    User.findOne({email : email}).then( (savedUser) =>{

        if(!savedUser){
            return res.status(422).json({error : "Invalid email and password"});
        }

        console.log(savedUser);
        const hash = savedUser.password;
        bcrypt.compare(password, hash).then((isMatch)=>{
            
            if(isMatch){
                const token = jwt.sign({_id : savedUser._id}, JWT_SECRET_TOKEN);

                //successfully signed in
                const {_id, name, email, followers, following, pic} = savedUser;
                res.json({token : token, user : {_id, name, email, followers, following, pic}});
            }else{
                return res.status(422).json({error : "Invalid email and password"});
            }
        }).catch((err)=>{
            console.log(err);
        })

    }).catch((err)=>{
        console.log(err);
    })

});


module.exports  = router;