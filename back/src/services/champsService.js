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
  getChampsByTag: async (tag) => {
    return await Champ.find({ tags: { $elemMatch: { $regex: tag, $options: "i" } } });
  },
  getChampByRiotId: (id) => {
    return Champ.findOne({ id });
  },
  createChamp: async (champData) => {
    const existing = await Champ.findOne({ id: champData.id });
    if (existing) {
      throw new Error(`El campeón con id ${champData.id} ya existe`);
    }

    return Champ.create(champData);
  },
  
  createManyChamps: async (champsData = []) => {
    const results = {
      created: [],
      skipped: [],
      errors: [],
    };

    for (const champ of champsData) {
      try {
        const created = await module.exports.createChamp(champ);
        results.created.push(created);
      } catch (error) {
        if (error.message.includes("ya existe")) {
          results.skipped.push({ id: champ.id, reason: error.message });
        } else {
          results.errors.push({ id: champ.id, reason: error.message });
        }
      }
    }

    return results;
  },
};
