const mongoose = require("mongoose");
require("dotenv").config();
module.exports.connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI);
    let dbconn = mongoose.connection;
    dbconn.on("error", console.error.bind(console, "connection error:"));
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
