const app = require("./src/server");
const conDb = require("./src/config/dbConfig");

//al guardar el metodo express en una variable podemos usar el metodo "LISTEN" que hace que siempre esté encendido el servidor, donde le damos un puerto(3000), y una funcion CB
//este nos conecta con el server

conDb().then((res) => {
  app.listen(3002, () => {
    console.log("servidor escuchando en el puerto 3002");
  });
});
