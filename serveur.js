var express=require('express');
var app=express();
var port=8083;
app.get('/',(req,res) => {
    res.send('hello simplon ADEFNIFA')
});
app.listen(8083)