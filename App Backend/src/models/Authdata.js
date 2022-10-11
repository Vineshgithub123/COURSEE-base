const mongoose = require('mongoose');
const schema = mongoose.Schema;
const professorSchema = new schema({
    email:String,
    username:String,
    password:String,
    role:String,
    rej: Boolean,
});
const profdata = mongoose.model('professorData',professorSchema);
module.exports= profdata;
