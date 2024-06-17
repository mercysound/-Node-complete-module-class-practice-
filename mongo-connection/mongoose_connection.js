const mongoose = require("mongoose")
const URI = process.env.MY_MONGO_URI
const mongooseConnection = mongoose.connect(URI)
  .then(() => {
    console.log("Mongoose has connected");
  })
  .catch((err) => {
    console.log("Mongoose refuse to connect");
    console.log(err);
  });

module.exports = mongooseConnection;
