const express = require('express');
const knex = require("../db/connection");
const {response} = require("express");
const router= express.Router();

router.post("/",(req,res)=>{ 
    
    const formData =req.body;
    knex("clucks")
    .insert({
        username: formData.username,
        })
    .returning('*')
    .then((cluck)=>{
        res.send(cluck);
    })
})



router.post("/clucks",(req,res)=> {
    knex("clucks")
    .orderBy("createdAt")
    .then((events) => {
        res.render('clucks/index',{clucks});
    })
});


module.exports=router;
