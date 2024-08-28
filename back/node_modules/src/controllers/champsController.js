const champsService = require("../services/champsService");

module.exports = {
  getAllchamps: async (req, res) => {
    try {
      const champs = await champsService.getAllchamps();
      res.status(200).json(champs);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los campeones" });
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
  getChampsByName: async (req, res) => {
    try {
      const champName = req.params.name; // Acceso correcto a los parámetros
      const champ = await champsService.getChampsByName(champName);
      if (champ) {
        res.status(200).json(champ);
      } else {
        res.status(404).json({ message: "Campeón no encontrado" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener el campeón por nombre" });
    }
  },
};
