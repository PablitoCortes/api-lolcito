const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LOL Champions API",
      version: "1.0.0",
      description:
        "API para administrar campeones de League of Legends basada en los datos de Data Dragon.",
    },
    servers: [
      {
        url: process.env.SERVER_URL || "http://localhost:3002",
        description: process.env.SERVER_URL ? "Servidor de producción" : "Servidor local",
      },
    ],
  },
  apis: [
    path.join(__dirname, "../routes/*.js"),
    path.join(__dirname, "../models/Champ.js"),
  ],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};

