const express = require("express");

const router = new express.Router();

const MensRanking = require("../model/mens");

// INSERTING INTO DB
router.post("/mens", async (req, res) => {
    try{
        const mens = new MensRanking(req.body);
        const result = await mens.save();
        console.log(req.body);
        if(!result){
            return res.status(401).send();
        }else{
            res.status(201).send(result);
        }
    }catch(err){
        res.status(400).send(err);
    }
})


// GETTING ALL MEN RUNNERS
router.get("/mens", async (req, res) => {
    try{
        const result = await MensRanking.find().sort({"ranking" : 1});
        if(!result){
            return res.status(401).send();
        }else{
            console.log(result);
            res.status(201).send(result);
        }
    }catch(err){
        res.status(400).send(err);
    }
})


// GETTING PARTICULAR MEN RUNNER BY ID
router.get("/mens/:menId", async (req, res) => {
    try{
        const id = req.params.menId;
        const result = await MensRanking.findById({_id : id});
        if(!result){
            return res.status(400).send();
        }else{
            res.status(200).send(result);
        }
    }catch(err){
        res.send(err);
    }
})


// UPDATE PARTICULAR MEN RUNNER BY ID
router.patch("/mens/:menId", async (req, res) => {
    try{
        const id = req.params.menId;
        const result = await MensRanking.findByIdAndUpdate({_id : id}, {$set : req.body});
        if(!result){
            return res.status(400).send();
        }else{
            res.status(200).send(result);
        }
    }catch(err){
        res.send(err);
    }
})


// DELETE PARTICULAR MEN RUNNER BY ID
router.delete("/mens/:menId", async (req, res) => {
    try{
        const id = req.params.menId;
        const result = await MensRanking.findByIdAndDelete({_id : id}, req.body);
        if(!result){
            return res.status(400).send();
        }else{
            res.status(200).send(result);
        }
    }catch(err){
        res.send(err);
    }
})







module.exports = router;
