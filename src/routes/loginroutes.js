const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController'); //Importa o controller de clientes

//Rota para fazer um novo login
router.post('/login', loginController.loginCliente);

module.exports = router;