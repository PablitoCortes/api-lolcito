const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
// el metodo "express" nos levanta un servidor local que siempre está funcionando
const app = express();

// aca quiero utilizar el middleware de morgan
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//entra la solicitud "app" que solo lo define, y redirecciona la solicitud al router
app.use(router);

module.exports = app;
