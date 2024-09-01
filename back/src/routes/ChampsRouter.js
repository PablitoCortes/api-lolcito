const { Router } = require("express");
const champsController = require("../controllers/champsController");

const ChampsRouter = Router();

ChampsRouter.get("/", champsController.getChamps);
ChampsRouter.get("/line/:line", champsController.getChampsByLine);
ChampsRouter.get("/id/:id", champsController.getChampById);

module.exports = ChampsRouter;
