const cors = require("cors");
const router = require("./src/routes/routes.js");
const express = require("express");
const port = 3000;
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(router);

app.set("view engine", "ejs");

app.get("/tabelaAlunos", (req, res) => {
    res.render("tabelaAlunos.ejs", { alunos: alunosData });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})