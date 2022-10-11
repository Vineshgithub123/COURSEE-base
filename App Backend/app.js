const express = require('express');
const app = new express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const path = require('path');

const mongoose= require('mongoose');

const port = 3000;
const studentRoute = require('./src/routes/studentRoute')
const professorRoute= require('./src/routes/professorRoute')
const authRoute= require('./src/routes/authRoute')
const courseroute =require('./src/routes/course')


mongoose.connect('mongodb+srv://Vinesh111:b9bapRgGMJqQrmvJ@cluster0.wvv3hu9.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
})

app.use('/student', studentRoute );
app.use('/professor',professorRoute);
app.use('/auth',authRoute);
app.use('/home',courseroute)
app.listen(port,()=>{
    console.log("server running on port" + port);

})