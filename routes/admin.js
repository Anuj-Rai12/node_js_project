const express = require('express');
const path = require('path');
const dirPATH = require('../utils/path');
const rounts = express.Router();

rounts.post('/product_create', (req, res, next) => {
    console.log(req.body);
    res.redirect('/admin');
})

rounts.get('/admin', (req, res, next) => {
    //res.sendFile(path.join(__dirname,'../','views','add-products.html'));
    res.sendFile(path.join(dirPATH.path,'views','add-products.html'));
})


module.exports = {
    router: rounts
}