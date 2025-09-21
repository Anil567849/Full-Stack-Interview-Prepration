

import User from '../model/User.js';


export const addUser = async (req, res) => {
      try {
            let exist = await User.findOne({googleId : req.body.googleId});
            if(exist){
                  res.send('user already exist');
                  return;
            }
            const newUser = new User(req.body);
            await newUser.save();
            res.send('user saved');
      } catch (error) {
            console.log('error usercontroller.js server ' + error);
      }
}


export const getUsers = async (req, res) => {
      try{
            const users = await User.find({});
            res.status(200).json(users);
      }catch(err){
            res.status(500).json(err);
      }
}