const app = require("../src/server");

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
