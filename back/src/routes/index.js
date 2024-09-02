const { Router } = require("express");
const ChampsRouter = require("./ChampsRouter");

const router = Router();

//router recibe la solicitud del server y decide a donde enviarla con el enrutador de users, o de posts.
router.use("/champs", ChampsRouter);
router.use("/", (req, res) => {
  res.status(200).send(`<h1> hola madafakas </h1>`);
});

module.exports = router;
