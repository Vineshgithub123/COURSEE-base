const express = require('express');
const approveddata = require('../models/Approvaldata');
const router = express.Router();
const jwt = require ("jsonwebtoken");
const EnrollmentData = require("../models/Enrolldata");
const notificationdata = require('../models/notify');

// Middleware Fuction to verify Token send from FrontEnd 
function verifyToken(req,res,next){
  // console.log(req.headers)

  if(!req.headers.authorization){
     return res.status(401).send("Unauthorized Access")
  }
  var tokens = req.headers.authorization.split(' ')[1];
 
 console.log(tokens)
 if(tokens == "null"){
     return res.status(401).send("Unauthorized Access")
 }

 var payload= jwt.verify(tokens , "secretkey")
 console.log(payload)
 if(!payload){
     return res.status(401).send("Unauthorized Access")
 }
 req.userId = payload.subject
      next()
 }



router.post("/enrollstudent" ,verifyToken, (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

  var enroll= req.body;
  console.log(enroll)

  var enrollstudent={
    email: enroll.email,
    username: enroll.username,
    phonenumber: enroll.phonenumber,
    address: enroll.address,
    qualification: enroll.qualification,
    course: enroll.course,
  }

  var enrolldata = new EnrollmentData(enrollstudent)
      enrolldata.save();
      res.send({ status: true, message: 'Success' })

})


router.get("/messagedata/:id" ,verifyToken, (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

   var id = req.params.id
   console.log('id')

   approveddata.findOne({email:id}).then((data)=>{
    if(data===null){
      res.send()
    }else{
      var course = data.course
      console.log(course)

      notificationdata.find({course:course}).sort({"date": -1}).then((data)=>{
        console.log(data)
        res.send(data)
      })
    }
   })

})

router.get("/profiledata/:id" ,verifyToken, (req,res)=>{
  var id = req.params.id;
  console.log(id)

  approveddata.findOne({email:id}).then((data)=>{
    // console.log(data)
    res.send(data)
  })

})

router.post('/checkverified', (req, res) => {
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

  userid = req.body.id;
  approveddata.findOne({ email: userid }).then((data) => {
    if (data) {
      res.send();
    }
    
  })
  
 })





module.exports=router;