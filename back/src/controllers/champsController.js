const champsService = require("../services/champsService");

module.exports = {
  getChamps: async (req, res) => {
    const { name } = req.query;
    try {
      const champs = await champsService.getChamps(name);
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
      const champLine = req.params.line; // Acceso correcto a los parámetros
      const lineChamps = await champsService.getChampsByLine(champLine);
      if (lineChamps.length > 0) {
        res.status(200).json(lineChamps);
      } else {
        res
          .status(404)
          .json({ message: "No se encontraron campeones para esta línea" });
      }
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
