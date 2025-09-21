import User from "../model/userSchema.js";




export const userSignup = async (req, res) => {
    try{

        const exist = await User.findOne({username : req.body.username});  
        
        if(exist){
            return res.status(401).json("username already exists")
        }else{

            const user = req.body;
            // console.log(req.body);
            const newUser = new User(user);
            await newUser.save();

            res.status(200).json("user registered successfully");
        }
    }catch(err){
        console.log("Error userController.js " + err);
    }
}



export const userLogin = async (req, res) =>{
    try{

        const exist = await User.findOne({username : req.body.username, password : req.body.password});

        if(exist){
            res.status(200).json("logged in successfully");
        }else{
            res.status(401).json("invalid login");
        }
        
    }catch(err){        
        console.log("Error userController.js " + err);
    }
}