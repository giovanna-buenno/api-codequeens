const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());

//criar um array chamado "pessoas"
//banco de dados local
const publicDir = path.join(__dirname, "./");

let pessoas = [
  {
    nome: "maria",
    login: "admn1",
    senha: "1234",
    idade: 14,
    animalfavorito: "coelho",
    id: 1,
  },
  {
    nome: "eduarda",
    login: "admn2",
    senha: "1234",
    idade: 13,
    animalfavorito: "girafa",
    id: 2,
  },
  {
    nome: "laura",
    login: "admn3",
    senha: "1234",
    idade: 14,
    animalfavorito: "gato",
    id: 3,
  },
  {
    nome: "gabi",
    login: "admn4",
    senha: "1234",
    idade: 21,
    animalfavorito: "cachorro",
    id: 4,
  },
  {
    nome: "ana laura",
    login: "admn5",
    senha: "1234",
    idade: 14,
    animalfavorito: "pantera",
    id: 5,
  },
];

//API do tipo GET rota = 'http://localhost:3000/'
app.get("/", (req, res) => {
  res.sendFile(path.join(publicDir, "itens.html"));
});

//API do tipo POST rota = 'http://localhost:3000/pessoas'
app.post("/pessoas", (req, res) => {
  const { nome, idade, animalfavorito } = req.body;
  const newUser = {
    id: pessoas.length + 1,
    nome,
    idade,
    animalfavorito,
  };
  console.log("novos dados:", newUser);
  pessoas.push(newUser);
  res.status(201).json(newUser); //codogo de criacao com sucesso
});

//API do tipo GET rota = 'http://localhost:3000/pessoasnbmi
app.get("/pessoas", (req, res) => {
  res.json(pessoas);
});
//API do tipo GET rota = 'http://localhost:3000/pessoas/1'

app.get("/pessoas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pessoa = pessoas.find((p) => p.id === id);

  if (!pessoa) {
    return res.status(404).json({ mensagem: "Pessoas não encontrada" });
  }
  res.json(pessoa);
});

//endpoint  05 do tipo PUT/PATCH rota = 'http://localhost:3000/1'

app.put("/pessoas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("ID:", id);

  const pessoa = pessoas.find((p) => p.id === id);
  console.log("PESSOA:", pessoa);

  if (!pessoa) {
    return res.status(404).json({ mensagem: "Pessoa não encontrada" });
  }
  const novaPessoa = req.body;
  console.log("NOVA PESSOA:", novaPessoa);
  console.log("PESSOA ANTIGA:", pessoa);

  pessoa.nome = novaPessoa.nome;
  pessoa.animalfavorito = novaPessoa.animalfavorito;
  pessoa.idade = novaPessoa.idade;

  pessoas[pessoa.id - 1] = pessoa;

  console.log("PESSOAS:", pessoas);

  res.json(pessoa);
});

app.delete("/pessoas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("ID :", id);

  const pessoa = pessoas.find((p) => p.id === id);
  console.log("PESSOAS :", pessoas);
  if (!pessoa) {
    return res.status(404).json({ mensagem: "Pessoa não encontrada" });
  }

  pessoas.splice(id, 1);
  console.log("PESSOAS :", pessoas);
  res.json(pessoas);
});

//aula 19/09 - NOVOS ENDPOINTS

app.post("/login", (req, res) => {
  const { login, senha } = req.body;

  //verificar se um dos campos esta vazio
  if (!login || !senha) {
    return res.status(400).json({ menssage: "Requisição invalida" });
  }

const usuario = pessoas.find((p) => p.login === login);
if (usario) {
  res.status(404).json({
    menssage: "Usuario nao encontrado",
  });
}

if (usuario.senha !== senha) {
  return res.status(404).json({
    menssage: "Senha incorreta",
  });
}});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`servidor rodando em http://localhost:${PORT} `);
});

//npm i express
//node index.js
