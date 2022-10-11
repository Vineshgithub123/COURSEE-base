const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Vinesh111:b9bapRgGMJqQrmvJ@cluster0.wvv3hu9.mongodb.net/?retryWrites=true&w=majority')
const Schema = mongoose.Schema;

const NotifySchema = new Schema({

  name:String,
  message:String,
  course:String,
  date:String,

});

var notificationdata = mongoose.model('notificationdata', NotifySchema);
module.exports = notificationdata;