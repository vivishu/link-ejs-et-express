var express=require('express');
var app=express();
var port=8083;
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('view')
})
app.listen(8083)