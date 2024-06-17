const mongoose = require("mongoose");

let todoShema = mongoose.Schema({
  todoname: { type: String, require: true },
  inputDate: { type: Date, default: Date.now() },
});
let todoModel = mongoose.model("list_todo", todoShema);


module.exports = todoModel;
