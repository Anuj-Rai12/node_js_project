const express = require('express');
const path = require('path');
const dirPATH = require('../utils/path');
const rounts = express.Router();


rounts.get('/',(req,res,next)=>{
    res.sendFile(path.join(dirPATH.path,'views','shop.html'));
})

module.exports={
router:rounts
}