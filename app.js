const http = require('http');
const expressImp = require('express');
const path=require('path');
const admin=require('./routes/admin');
const shop=require('./routes/shop');
const bodyparser = require('body-parser');
const app = expressImp();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(expressImp.static(path.join(__dirname,'public')));
app.use(admin.router);
app.use(shop.router);

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','page_not_found.html'));
})

app.listen(4000);

