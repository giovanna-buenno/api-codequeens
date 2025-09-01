const express = require('express');
const app = express();

app.use(express.json());

//criar um array chamado "pessoas"
let pessoas = [
    { nome: 'maria', idade: 14, animalfavorito: 'coelho' },
    { nome: 'eduarda', idade: 13, animalfavorito: 'girafa' },
    { nome: 'laura', idade: 14, animalfavorito: 'gato' },
    { nome: 'gabi', idade: 21, animalfavorito: 'cachorro' },
    { nome: 'ana laura', idade: 14, animalfavorito: 'pantera' },
]


//API do tipo GET rota = 'http://localhost:3000/'
app.get('/', (req, res) => {
    res.json({ mensagem: 'API de pessoas funcionando' });
});


//API do tipo GET rota = 'http://localhost:3000/pessoas
app.get('/pessoas', (req, res) => {
    res.json(pessoas)
});


const PORT = 3000;
app.listen(PORT, () => {

    console.log(`servidor rodando em http://localhost:${PORT} `);

});

//npm i express
//node index.js