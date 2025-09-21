const express = require('express');

require('./db/conn');
const Student = require('./model/students');

const studentRouter = require("./router/student");

const port = process.env.PORT || 8000;

const app = express();

// if we get request in form of json, now express will recognize it well
app.use(express.json());


//register our router
app.use(studentRouter);



app.get("/", (req, res) => {
    res.send("hello ");
})




/*
// 3 STEPS TO IMPLEMENT ROUTER 
// 1. create a new router
const router = new express.Router();
// 2. define a router 
router.get("/anil", (req, res) => {
    res.send("hello from router")
})
// 3. register a router
app.use(router);
*/





/*
// API WORK  -  CRUD
/*
// USIGN PROMISES 
app.post("/students", (req, res) => {

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
/*


// USING ASYNC AWAIT 
app.post("/students", async (req, res) => {
    try{
        const user = new Student(req.body);
        const result = await user.save();
        res.status(201).send(result);
    }catch (err) {
        res.status(400).send(err);
    }
})





// READ 
app.get("/students", async (req, res) => {
    try{
        const result = await Student.find();
        res.status(201).send(result);
    }catch(err){
        res.status(400).send(err);
    }
})



// READ - BY ID
app.get("/students/:studentId", async (req, res) => {
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
app.get("/students/:studentName", async (req, res) => {
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
app.patch("/students/:studentId", async (req, res) => {
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
app.delete("/students/:studentId", async (req, res) => {

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
*/
app.listen(port, () => {
    console.log('listening');
})