const express = require('express');
const Student = require('../model/students');

const router = new express.Router();




/*
// USIGN PROMISES 
router.post("/students", (req, res) => {

    // whatever request we get, we access it like this 
    // console.log(req.body);


    // our model [table m insert krna]
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        console.log(err);
        res.status(400).send(err);
    })

})
*/



// USING ASYNC AWAIT 
router.post("/students", async (req, res) => {
    try{
        const user = new Student(req.body);
        const result = await user.save();
        res.status(201).send(result);
    }catch (err) {
        res.status(400).send(err);
    }
})





// READ 
router.get("/students", async (req, res) => {
    try{
        const result = await Student.find();
        res.status(201).send(result);
    }catch(err){
        res.status(400).send(err);
    }
})



// READ - BY ID
router.get("/students/:studentId", async (req, res) => {
    try{
        const id = req.params.studentId;

        // const result = await Student.find({_id : id})

        // SAME
        const result = await Student.findById({_id : id})

        if(!result){
            return res.status(404).send();
        }else{   
            res.send(result);
        }
    }catch(err){
        res.send(err);
    }
})




// READ - BY NAME
router.get("/students/:studentName", async (req, res) => {
    try{
        const sName = req.params.studentName;

        const result = await Student.find({_id : sName})

        if(!result){
            return res.status(404).send();
        }else{   
            res.send(result);
        }
    }catch(err){
        res.send(err);
    }
})



// UPDATE
router.patch("/students/:studentId", async (req, res) => {
    try{
        const sId = req.params.studentId;
        // const result = await Student.updateOne({_id : sId}, {$set : req.body});
        
        // SAME 
        const result = await Student.findByIdAndUpdate({_id : sId}, {$set : req.body});
        if(!result){
            return res.status(404).send();
        }else{
            console.log(result);
            res.status(201).send(result);
        }
    }catch(err){
        res.status(400).send(err);
    }
})



//DELETE 
router.delete("/students/:studentId", async (req, res) => {

    try{
        const sId = req.params.studentId;
        // const result = await Student.deleteOne({_id : sId});

        // SAME
        const result = await Student.findByIdAndDelete({_id : sId});

        if(!result){
            return res.status(400).send();
        }else{
            console.log(result);
            res.status(201).send(result);
        }
    }catch(err){
        res.status(400).send(err);
    }

} )

module.exports = router;