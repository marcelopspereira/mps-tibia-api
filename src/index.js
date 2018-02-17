// Importa a configuração criada e cria uma instancia do express
const app = require("./config/express.config")();

//Define uma porta padrão,caso não tenha alguma passada por variável de ambiente
const port = process.env.PORT || 8080;

//coloca p servidor online, passando a porta e uma função de callbakc, que apenas loga e informa que serviço esta online
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
