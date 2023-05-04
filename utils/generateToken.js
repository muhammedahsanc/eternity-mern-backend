const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (data) => {
  try {
    return jwt.sign({ data: data }, process.env.SECRET_KEY, {
      expiresIn: "3d",
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = generateToken;
