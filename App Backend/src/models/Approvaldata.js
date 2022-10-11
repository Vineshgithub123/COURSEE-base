const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ApprovedSchema = new Schema({

  email: String,
  username: String,
  phonenumber: Number,
  address: String,
  qualification: String,
  course: String,
  datejoin:String,

});

var approveddata = mongoose.model('approveddata', ApprovedSchema);
module.exports = approveddata;