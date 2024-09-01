const mongoose = require("mongoose");

const dbURI = process.env.MONGO_URI;

const conDb = async () => {
  await mongoose.connect(dbURI);
};

module.exports = conDb;
