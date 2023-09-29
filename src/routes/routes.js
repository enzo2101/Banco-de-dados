const database = require("../database/connectionKnex"); //importando a conexão com o banco de dados
const express = require("express"); //importando a biblioteca express
const routes = express.Router(); //criando a rota
const app = express();

const AlunoController = require("../controllers/AlunoController"); //importando o Controler do Aluno

routes.post("/novoAlunos", AlunoController.novoAluno);

routes.get("/listarAlunos", AlunoController.listarAlunos);

routes.get("/buscarAlunos/:matricula", AlunoController.buscarAlunos);

routes.post("/alterarAlunos/:matricula", AlunoController.alterarAlunos);

routes.delete("/excluirAlunos/:matricula", AlunoController.excluirAlunos);

app.use(express.static(__dirname + '/src/views'));

app.get("/cadastroAluno.html", (req, res) => {
    res.render("cadastroAluno.html");
});

module.exports = routes;
