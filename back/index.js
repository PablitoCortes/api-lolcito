const app = require("./src/server");
const conDb = require("./src/config/dbConfig");

conDb().then((res) => {
  app.listen(3002, () => {
    console.log("servidor escuchando en el puerto 3002");
  });
});

module.exports = app;
