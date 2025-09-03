const express = require('express');
const app = express();

app.use(express.json());

//criar um array chamado "pessoas"
//banco de dados local 
let pessoas = [
    { nome: 'maria', idade: 14, animalfavorito: 'coelho', id: 1 },
    { nome: 'eduarda', idade: 13, animalfavorito: 'girafa', id: 2 },
    { nome: 'laura', idade: 14, animalfavorito: 'gato', id: 3 },
    { nome: 'gabi', idade: 21, animalfavorito: 'cachorro', id: 4 },
    { nome: 'ana laura', idade: 14, animalfavorito: 'pantera', id: 5 },
]

//API do tipo GET rota = 'http://localhost:3000/'
app.get('/', (req, res) => {
    res.json({ mensagem: 'API de pessoas funcionando' });
});

//API do tipo POST rota = 'http://localhost:3000/pessoas'
app.post('/pessoas', (req, res) => {
    const { nome, idade, animalfavorito } = req.body;
    const newUser = {
        id: pessoas.length + 1,
        nome,
        idade,
        animalfavorito
    };
    console.log("novos dados:", newUser)
    pessoas.push(newUser);
    res.status(201).json(newUser);//codogo de criacao com sucesso
});

//API do tipo GET rota = 'http://localhost:3000/pessoasnbmi
app.get('/pessoas', (req, res) => {
    res.json(pessoas)
});
//API do tipo GET rota = 'http://localhost:3000/pessoas/1'
 

app.get('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pessoa = pessoas.find(p => p.id === id);

    if (!pessoa) {
        return res.status(404).json({ mensagem: 'Pessoas não encontrada' });
    }   
res.json(pessoa);
});


const PORT = 3000;
app.listen(PORT, () => {

    console.log(`servidor rodando em http://localhost:${PORT} `);

});

//npm i express
//node index.js