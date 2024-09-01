const champsService = require("../services/champsService");

module.exports = {
  getChamps: async (req, res) => {
    const champName = req.query.name;
    try {
      const champs = await champsService.getChamps(champName);
      if (champs.length > 0) {
        return res.status(200).json(champs);
      }
      res.status(404).json({ message: "Campeón no encontrado" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener el campeón por nombre" });
    }
  },
  getChampsByLine: async (req, res) => {
    try {
      const champLine = req.params.line;
      const lineChamps = await champsService.getChampsByLine(champLine);
      res.status(200).json(lineChamps);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener los campeones por línea" });
    }
  },
  getChampById: async (req, res) => {
    try {
      const champId = parseInt(req.params.id);
      const champ = await champsService.getChampById(champId);
      res.status(200).json(champ);
    } catch (error) {
      res.status(404).json({ message: "No hay una mondá" });
    }
  },
};
