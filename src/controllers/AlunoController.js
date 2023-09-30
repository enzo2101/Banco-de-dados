const database = require("../database/connection"); //importando a conexão com o banco de dados
const path = require("path");

class AlunoController {
  novoAlunoGET (req, res) {
    res.render(path.join(__dirname, "../views/novoAluno.ejs"));
  }

  novoAluno(req, res) {
    const { nome, turma, email, genero } = req.body;
    console.log( nome, turma, email, genero );

    database.insert({ nome, turma, email, genero }).table("alunos").then((response) => {
      console.log(response);
      res.json({ message: "Aluno cadastrado com sucesso!" });
    }).catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Erro ao cadastrar aluno" });
    });
  }

  listarAlunos(req, res) {
      database.select("*").from("alunos").then((response) => {
        console.log(response);  
        res.render(path.join(__dirname, "../views/listarAluno.ejs"), { alunos: response });
      }).catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Erro ao listar alunos" });
      });
    }

  buscarAlunos(req, res) {
    const id = req.params;
    console.log(id);
    database.select("*").from("alunos").where({matricula:id.matricula}).then((response) => {
    console.log(response);
    res.json(response);
    }).catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Erro ao buscar aluno" });
    });
  }

  alterarAlunos(req, res) {
    const id = req.params;
    const { nome, turma, email, genero } = req.body;
    console.log(nome, turma, email, genero);

    database.update({ nome, turma, email, genero }).table("alunos").where({matricula:id.matricula}).then((response) => {
      console.log(response);
      res.json({ message: "Aluno alterado com sucesso!" });
    }).catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Erro ao alterar aluno" });
    });
  }

  excluirAlunos(req, res) {
    const id = req.params;
  
    database.where({ matricula:id.matricula }).table("alunos").delete().then((response) => {
      console.log(response);
      res.json({ message: "Aluno excluído com sucesso!" });
    }).catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Erro ao excluir aluno" });
    });
  }  
}

module.exports = new AlunoController();
