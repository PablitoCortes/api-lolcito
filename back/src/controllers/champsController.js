const champsService = require("../services/champsService");

module.exports = {
  getChamps: async (req, res) => {
    const champName = req.query.name;
    try {
      const champs = await champsService.getChamps(champName);
      return res.status(200).json(champs);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener el campeón por nombre" });
    }
  },
  getChampsByTag: async (req, res) => {
    try {
      const champTag = req.params.tag;
      const tagChamps = await champsService.getChampsByTag(champTag);
      res.status(200).json(tagChamps);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener los campeones por etiqueta" });
    }
  },
  getChampByRiotId: async (req, res) => {
    try {
      const champId = req.params.id;
      const champ = await champsService.getChampByRiotId(champId);
      if (!champ) {
        return res.status(404).json({ message: "Campeón no encontrado" });
      }
      res.status(200).json(champ);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el campeón" });
    }
  },
  createChamp: async (req, res) => {
    try {
      const champData = req.body;
      if (!champData || !champData.id || !champData.name || !champData.key) {
        return res.status(400).json({
          message: "Los campos id, key y name son obligatorios",
        });
      }

      const created = await champsService.createChamp(champData);
      res.status(201).json(created);
    } catch (error) {
      if (error.message.includes("ya existe")) {
        return res.status(409).json({ message: error.message });
      }
      res.status(500).json({ message: "Error al crear el campeón" });
    }
  },
  createManyChamps: async (req, res) => {
    try {
      const { champs } = req.body;
      if (!Array.isArray(champs) || champs.length === 0) {
        return res.status(400).json({
          message: "Debes enviar un arreglo con campeones",
        });
      }

      const results = await champsService.createManyChamps(champs);
      res.status(201).json(results);
    } catch (error) {
      res.status(500).json({ message: "Error al crear los campeones" });
    }
  },
};
