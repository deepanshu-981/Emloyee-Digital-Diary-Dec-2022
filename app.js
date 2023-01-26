const express=require('express');
const mongoos=require('mongoose');
const bodyParser=require('body-parser');

const homeRoutes=require('./routers/home')
const app=express();
const port=process.env.port || 8080;
mongoos.connect("mongodb://localhost:27017/studentdetails",{useNewUrlParser:true});//db

const db=mongoos.connection;
db.on('error',()=>
{
    console.log("error in db");
})
db.once('open',()=>
{
    console.log("db connected");
})


app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/',homeRoutes);
app.listen(port);