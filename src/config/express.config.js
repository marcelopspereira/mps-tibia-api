const express = require("express");

//exporta uma função
module.exports = () => {
  //criar uma variavel recebendo uma instância do express
  const app = express();

  //Resolvendo questoes de cross-domain
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type,Accept"
    );
    next();
  });

  app.get("/", (req, res) => res.json({ test: "success" }));

  //retorna a instância do express
  return app;
};