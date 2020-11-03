const { response, request } = require('express');
const express = require('express');
const router = express.Router();
const knex = require("../db/connection");

router.get('/',(req,res) => {
    res.render('cluck');
});

router.get('/clucks', (request, response) => {
    knex('clucks').select('*').then(clucks => response.render('clucks', {clucks}))
    
  });

router.post('/sign_in',(req,res) => {
    const params = req.body;
    res.cookie('username',params.username,{maxAge: 1000*60*60*24*7});
    res.redirect('/')
})


router.post('/sign_out',(req,res) => {
    res.clearCookie("username");
    res.redirect('/');
})
module.exports = router;