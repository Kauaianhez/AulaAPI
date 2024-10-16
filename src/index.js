//Importação de dependências
require('dotenv').config(); //Carrega variáveis de ambiente de um arquivo

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/routes');
const db = require('./db/db'); // Módulo de conexão com o banco de dados
const { METHODS } = require('http');


const corsOptions = {
    origin: ['http://localhost:3333', 'https://meudominio.com'], //Lista de origens permitidas
    methods: 'GET,POST,PUT,DELETE', //Métodos HTTP permitidos
    credentials: true, //Permite o envie de cookies
};

//Inicialização do aplicativo
const app = express();

//Middlewares de segurança e utilidades
app.use(helmet());// Protege a aplicação com headers de segurança

app.use(cors(corsOptions)); //Habilita o CORS

app.use(morgan('dev')); //Loga as requisições no console

app.use(express.json());//Converte os dados recebidos para JSON

//Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, 'public'))); //Pasta de arquivos estáticos

//Rota para servir o home.html
app.get('/', (req, res) => { 

    res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});

//Configuração de rotas
app.use('/', routes);

//Middleware de tratamento de erros
app.use((err, req, res, next) => {

    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

//Inicialização do servidor
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});