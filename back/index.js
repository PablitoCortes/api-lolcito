const app = require("./src/server");
const conDb = require("./src/config/dbConfig");

const PORT = process.env.PORT || 3002;

conDb().then((res) => {
  app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
  });
});

module.exports = app;
