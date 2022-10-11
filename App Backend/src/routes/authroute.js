const express = require('express')
const router = express.Router();
const jwt = require ("jsonwebtoken");
const bcrypt = require("bcrypt");
const userdata = require('../models/Authdata');
const saltRounds = 10;




router.post("/signup" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

      var user = req.body.data;
      console.log(user);
      const salt = bcrypt.genSaltSync(saltRounds);
      const pssd = bcrypt.hashSync(user.password, salt);

      userdata.findOne({email:user.email.trim()})
      .then((data)=>{
      if(data===null){

        var adduser = {
            email:user.email,
            username:user.username,
            password:pssd,
            role:user.role,
           
         }

        var adduser = new userdata(adduser);
        adduser.save();
        res.send({ status: true, data: 'Success' })
      }
      else{
        console.log("Email already taken")
        res.send({ status: false, data: 'Email already taken' })
      }
     })

});


router.post("/professorlogin" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

  var admin = req.body.data;
  console.log(admin);

  userdata.findOne({email:admin.email.trim() , role:admin.role})
  .then((data)=>{

    //console.log(data.id); 
    if(data===null){
        res.send({ status: false, data: 'Invalid Username and Password'})
    }else { 
      console.log(data)
        bcrypt.compare(admin.password , data.password , function(err, result) {
          if (result) {
            console.log(result)
            let payload = {subject:data.email};
            let tokens = jwt.sign(payload,"secretkey")
            var email = data.email;
            var name = data.username
            res.send({ status: true, data: 'Success', email ,name, tokens})
         }
         else{
              res.send({ status: false, data: 'Incorrect Username or Password'})
          }
      });
       
    }


  });

  

});


router.post("/studentlogin" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

  var student =req.body.data

  console.log(student.email , student.password , student.role);

  userdata.findOne({email:student.email.trim() , role:student.role})
  .then((data)=>{

    //console.log(data.id); 
    if(data===null){
        res.send({ status: false, data: 'Invalid Username and Password'})
    }else { 
      console.log(data)
        bcrypt.compare(student.password , data.password , function(err, result) {
          if (result) {
            console.log(result)
            let payload = {subject:data.email};
            let token = jwt.sign(payload , "secretkey")
            var email = data.email;
            var username = data.username
            res.send({ status: true, data: 'Success', email , token , username})
         }
         else{
              res.send({ status: false, data: 'Incorrect Username or Password'})
          }
      });
       
    }


  });
});












module.exports=router;