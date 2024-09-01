const Champ = require("../models/Champ");

module.exports = {
  getChamps: async (champName) => {
    if (champName) {
      return await Champ.find({
        name: { $regex: champName, $options: "i" },
      }).exec();
    }

    return await Champ.find();
  },
  getChampsByLine: async (linea) => {
    return await Champ.find({ line: { $in: [linea] } });
  },
  getChampById: (id) => {
    return Champ.findById(id);
  },
};
