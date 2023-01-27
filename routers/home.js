const express=require('express');
const Router=express.Router();
const Club=require('../models/club');


Router.get('/',(err,res)=>{
    res.render("index");
})
Router.get('/add',(err,res)=>{
    res.render("add");
})
//insertion
Router.post('/add',(req,res)=>{
     const name=req.body.name;
     const email=req.body.email;

    //  console.log(name,email);
    const club= new Club({
        name,email
    })
    club.save(err=>{
        if(err){
            console.log("error in adding");
        }
        else
        {
            res.redirect('/');
        }
    });
})

//find data show
Router.get('/show',(req,res)=>{
    Club.find((err,docs)=>{
        if(err)throw err;
        res.render('show',{
            students: docs  //we can use students in place of docs
        })
        // console.log(docs);
    })
})

// update data

Router.get('/edit/:id',(req,res)=>{
    // console.log(req.params.id);
    Club.findOneAndUpdate({_id: req.params.id},req.body,{new:true},(err,docs)=>
    {
        if(err)console.log("not upadated err");
        else res.render('edit',{studentdata:docs});
    })

})
Router.post('/edit/:id',(req,res)=>{
    Club.findByIdAndUpdate({_id:req.params.id},req.body,(err,docs)=>
    {
        if(err)
        console.log("err");
        else
        res.redirect('/show')
    })
})

//delete data
Router.get('/delete/:id',(req,res)=>
{
    Club.findByIdAndDelete({_id:req.params.id},req.body,(err,docs)=>{
        if(err)console.log("delete err");
        else
        {
            res.redirect('/show')
            console.log("yyy");}
    })
})


module.exports=Router;
