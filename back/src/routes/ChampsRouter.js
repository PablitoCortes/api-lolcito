const { Router } = require("express");
const champsController = require("../controllers/champsController");

const ChampsRouter = Router();

ChampsRouter.get("/", champsController.getAllchamps);
ChampsRouter.get("/champs/line/:line", champsController.getChampsByLine);
ChampsRouter.get("/champs/name/:name", champsController.getChampsByName);

module.exports = ChampsRouter;
