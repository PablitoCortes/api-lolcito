require("dotenv").config();
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const { swaggerUi, swaggerSpec } = require("./config/swagger");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(router);

module.exports = app;
