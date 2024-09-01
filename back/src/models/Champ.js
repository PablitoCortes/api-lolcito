const mongoose = require("mongoose");

const champSchema = new mongoose.Schema({
  name: String,
  habilities: Object,
  line: Array,
});

const Champ = new mongoose.model("campeones", champSchema);

module.exports = Champ;
