
const express = require('express');

const fs=require('fs');

const bodyParser=require('body-parser');

const app= express();

app.use(bodyParser.urlencoded({extended:false}));

app.get("/" , (req,res,next)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err);
            data="No chat exists"
        }
        res.send(`${data} <form 
        action="/" method="POST"
         onsubmit="document.getElementById('username').value= localStorage.getItem('username')"> 
         <input type="text" id="message" name="message" placeholder="Enter your message">
         <input type="hidden" id="username" name="username">
         <br>
         <button type="submit">Send</button>
         </form>`);
    })

  
   
});

app.post("/", (req,res,next)=>{

    console.log(req.body.username);
    console.log(req.body.message);

    if(req.body.message!=undefined){
        fs.writeFile( 'username.txt', `<br> ${req.body.username}: ${req.body.message}`,{flag:'a'},(err)=>
        err? console.log(err): res.redirect("/"));
    }
    else{
        fs.writeFile('username.txt', `<br> ${req.body.username} is online`,{flag:'a'},(err)=>
        err? console.log(err): res.redirect("/"));
    }
   

})

app.get("/login" , (req,res,next)=>{
    res.send(`<form 
     action="/" method="POST"
     onsubmit="localStorage.setItem('username', document.getElementById('username').value)"> 
     <input type="text" id="username" name="username" placeholder="Enter your username">
     <br>
     <button type="submit">Login</button>
     </form>`);
    
 });




app.listen(3000);