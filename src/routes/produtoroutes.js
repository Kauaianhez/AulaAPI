const express = require('express');
const router = express.Router();

const produtoControler = require('../controller/produtoController'); //Importa o controller de produto

//Rota para listar todos os produtos
router.get('/produto', produtoControler.listarProdutos);

//Rota para buscar um produto por ID
router.get('/produto/:codigoProduto', produtoControler.buscarProdutoId);

//Rota para buscar produtos por nome (prefixo)
router.get('/produto/nome/:nomeProduto', produtoControler.buscarProdutoNome);

//Rota para adicionar um novo produto
router.post('/produto', produtoControler.adicionarProduto);

//Rota para atualizar um produto por ID
router.put('/produto/:codigoProduto', produtoControler.atualizarProduto);

//Rota para deletar um produto por ID
router.delete('/produto/:codigoProduto', produtoControler.deletarProduto);

module.exports = router;