const express = require('express');
const approveddata = require('../models/Approvaldata');
const router = express.Router();
const jwt = require ("jsonwebtoken");
const coursedata = require("../models/coursedata");
const enrollmentdata = require('../models/Enrolldata');
const notificationdata = require('../models/notify');

function verifyToken(req,res,next){
console.log();
  if(!req.headers.authorization){
     return res.status(401).send("Unauthorized Access")
  }
  var tokens = req.headers.authorization.split(' ')[2];
 console.log(tokens);

 if(tokens == "null"){
     return res.status(401).send("Unauthorized Access")
 }

 var payload= jwt.verify(tokens,"secretkey")
 console.log(payload)
 if(!payload){
     return res.status(401).send("Unauthorized Access")
 }
 req.userId = payload.subject
      next()
 }


router.get("/getcount" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    var datacount=[]
    coursedata.countDocuments().then((number)=>{
        datacount.push(number)
        enrollmentdata.countDocuments().then((number)=>{
            datacount.push(number);
           approveddata.countDocuments().then((number)=>{
            datacount.push(number)
            console.log(datacount)
            res.send(datacount);
        })
        })
        
    })
})


router.get("/getrequest" , verifyToken ,(req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

  enrollmentdata.find().then((data)=>{
    res.send(data)
  })

})


router.delete("/deletreq/:id" ,verifyToken, (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
  console.log(req.params)
  var id = req.params.id

   enrollmentdata.findByIdAndDelete({"_id":id}).then((data)=>(
    res.send()
   ))

})



router.get("/approvestudent/:id" ,verifyToken, (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
  console.log(req.params)
  var id = req.params.id

  enrollmentdata.findById(id).then((data)=>{
    res.send(data)
    console.log(data);
  })

})


router.post("/approveddata" ,verifyToken, (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
  var data = req.body;
  console.log(data);

  var id = req.body._id;
  console.log(id)

  var date2join = new Date();
  var dd = String(date2join.getDate()).padStart(2, '0');
  var mm = String(date2join.getMonth() + 1).padStart(2, '0'); 
  var yyyy = date2join.getFullYear();
  date2join = dd + '/' + mm + '/' + yyyy;

  var enrollstudent={
    email: data.email,
    username: data.username,
    phonenumber: data.phonenumber,
    address: data.address,
    qualification: data.qualification,
    course: data.course,
    datejoin:date2join
  }


  var approvedata = new approveddata(enrollstudent)
      approvedata.save();
      res.send({ status: true, message: 'Success' })


  enrollmentdata.findByIdAndDelete(id).then((data)=>{
    res.send()
  })
})



router.get("/getapproveddata" ,verifyToken, (req,res)=>{
  approveddata.find().then((data)=>{
    res.send(data)
  })
})


router.delete("/deletapproved/:id" ,verifyToken, (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
  console.log(req.params)
  var id = req.params.id

   approveddata.findByIdAndDelete({"_id":id}).then((data)=>(
    res.send()
   ))
})


router.post("/bulknotification" ,verifyToken, (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
   var data = req.body;
   console.log(data);

   var date2join = new Date();
   console.log(date2join)

   var messsagedata={
    course:data.course,
    message:data.message,
    name:data.professor,
    date:date2join
  }


  var msgdata = new notificationdata(messsagedata)
      msgdata.save();
      res.send({ status: true, message: 'Success' })



})

router.post("/addcourse" ,verifyToken, (req,res)=>{
  
console.log(req.body)
 var course={
    title:req.body.data.course,
    description: req.body.data.message,
    image: req.body.data.imageurl,
  }
  console.log(course.title)

  var ccdata =new coursedata(course)
  ccdata.save();
  res.send({ status: true, message: 'Success' })
})


module.exports=router;