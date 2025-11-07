const { Router } = require("express");
const ChampsRouter = require("./ChampsRouter");

const router = Router();

router.use("/champs", ChampsRouter);

module.exports = router;
