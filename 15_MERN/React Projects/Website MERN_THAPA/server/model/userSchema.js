const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        
    },
    email : {
        type : String,
        
    },
    phone : {
        type : Number,
        
    },
    work : {
        type : String,
        
    },
    password : {
        type : String,
        
    },
    cpassword : {
        type : String,
        
    },
    date : {
        type : Date,
        default : Date.now
    },
    messages : [
        {
            name : {
                type : String,
                
            },
            email : {
                type : String,
                
            },
            phone : {
                type : Number,
                
            },
            message : {
                type : String,
                
            },
        }
    ],
    tokens_db : [
        {
            token : {
                type : String,
                require : true
            }
        }
    ]

});

//this func call before save method(auth.js)
userSchema.pre('save', function(next){

    // console.log("hlo pre");

    //if password modified then call this function only
    if(this.isModified('password')){
        this.password = bcryptjs.hash(this.password, 10);
        this.cpassword = bcryptjs.hash(this.cpassword, 10);
    }
    next();
});


userSchema.methods.generateAuthToken = async function(){
    try{
        let our_token = await jwt.sign({_id : this._id.toString()}, process.env.SECRET_KEY);
        this.tokens_db = this.tokens_db.concat({token : our_token});
        await this.save();
        return our_token;
    }catch(err){
        console.log({error : "userschema.js " + err })
    }
}






userSchema.methods.addMessage = async function(name, email, phone, message){
    try{
        this.messages = this.messages.concat({name : name, email : email, phone : phone, message : message})
        await this.save();
        return this.messages;
    }catch(err){
        console.log(err);
    }
}

const User = mongoose.model("users", userSchema);

module.exports = User;





