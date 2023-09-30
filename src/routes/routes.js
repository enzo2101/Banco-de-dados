const database = require("../database/connection"); //importando a conexão com o banco de dados
const express = require("express"); //importando a biblioteca express
const routes = express.Router(); //criando a rota
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

routes.use(bodyParser.urlencoded({ extended:true }));
routes.use(bodyParser.json());

app.set("view engine", "ejs");

const AlunoController = require("../controllers/AlunoController"); //importando o Controler do Aluno

routes.get("/novoAlunos", AlunoController.novoAlunoGET);

routes.post("/novoAlunos", AlunoController.novoAluno);

routes.get("/listarAlunos", AlunoController.listarAlunos);

routes.get("/buscarAlunos/:matricula", AlunoController.buscarAlunos);

routes.post("/alterarAlunos/:matricula", AlunoController.alterarAlunos);

routes.delete("/excluirAlunos/:matricula", AlunoController.excluirAlunos);

module.exports = routes;
