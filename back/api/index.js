const app = require("../src/server"); // Cambia esto según el nombre y la ubicación de tu archivo principal Express

module.exports = (req, res) => {
  return new Promise((resolve) => {
    const server = require("http").createServer(app);
    server.listen(0, () => {
      req.url = req.url || "/";
      const handler = app;
      handler(req, res);
      server.close(() => resolve());
    });
  });
};
