const mongoose = require("mongoose");
require("dotenv").config();

console.log(process.env.MONGODB_URI);

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://rootuser:password@localhost:27017/conquer-fitness?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-256"
);

console.log(process.env.MONGODB_URI);

//validate connection
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});

module.exports = mongoose.connection;
