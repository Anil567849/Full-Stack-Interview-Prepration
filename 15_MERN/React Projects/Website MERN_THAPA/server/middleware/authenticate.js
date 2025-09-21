



const jwt = require('jsonwebtoken');
const User = require("../model/userSchema");

const authenticate = async (req, res, next) =>{


    try{

        const tkn = req.cookies.jwttoken;

        // console.log("tkn " + tkn);

        const verifyToken = jwt.verify(tkn, process.env.SECRET_KEY);

        // console.log("token " + verifyToken._id);

        const rootUser = await User.findOne({_id : verifyToken._id, "token_db.token" : tkn});

        if(!rootUser){
            throw new Error("user not found");
        }

        req.token = tkn;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next();

    }catch(err){
        res.status(401).json({err : "authenticate.js " + err});
    }

}

module.exports = authenticate;