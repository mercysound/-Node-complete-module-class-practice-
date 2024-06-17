const mongoose = require("mongoose");
// to create s schema. It can only be  create once
let studentSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now() },
});
// the name of the collection
let studentModel = mongoose.model("student_tb", studentSchema);

module.exports = studentModel;