const mongoose = require ('mongoose');
const schema = mongoose.Schema;
const courseSchema = new schema({
    email: String,
  username: String,
  phonenumber: Number,
  address: String,
  qualification: String,
  course: String,
});
const Enrolldata = mongoose.model('Enrolldata',courseSchema);
module.exports = Enrolldata;