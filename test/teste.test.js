const teste = require('../src/arquivoTeste');

test('descrição do teste', ()=> {
    expect();
});

// testando valores
//expect = verifica
//toBe = é igual

// test('soma de 5 + 2 é igual a 7', () => {
//     expect(teste.soma(5, 2)).toBe(7);
// });


// test('divisão de 10 / 2 é igual a 5', () => {
//     expect(teste.div(10, 2)).toBe(5);
// });

// //toBeCloseTo = compara se o valor e paroximado ao esperado com uma tolerancia de 2 casas decimais
// test('divisão de 10 / 2 é igual a 5', () => {
//     expect(teste.div(10, 3)).toBeCloseTo(3.33,2);
// });

// test('subtração de 6 - 3 é igual a 3', () => {
//     expect(teste.sub(6, 3)).toBe(3);
// });

// test('multiplicação de 2 * 5 é igual a 10', () => {
//     expect(teste.mult(2, 5)).toBe(10);
// });

// test('verifica se 5 é positivo', () => {
//     expect(teste.verificaNumero(5)).toBe('positivo');
// });

// test('verifica se -3 é negativo', () => {
//     expect(teste.verificaNumero(-3)).toBe('negativo');
// });

// test('verifica se 0 é zero', () => {
//     expect(teste.verificaNumero(0)).toBe('zero');
// });

// //testando string
// test('verifica se "hello" é uma string', () => {
//     expect(teste.ehString('hello')).toBe(true);
// });

// test('verifica se 42 não é uma string', () => {
//     expect(teste.ehString(42)).toBe(false);
// });

// //testando objetos/vetores/arrays
// //toEqual = verifica se o valor é igual ao original
// test('retorna a lista de números pares até 6', () => {
//     expect(teste.numerosPares(6)).toEqual([2,4,6]);
// });


// //toBeTruthy = combina com qualque coisa que uma instrução if trata como verdadeiro
// test('verifica se a função retorna true ao validar string com pelo menos 3 caracteres', () => {
//     expect(teste.validarString('abc')).toBeTruthy();
// });

// //toBeFalsy = combina com qualquer coisa que uma instrução if trata como falso
// test('verifica se a função retorna false ao validar o número menor ou igual a 10', () => {
//     expect(teste.validarNumero(16)).toBeFalsy();
// });

// //toBeUndefined = verifica se é undefined (não contém um valor, chave ou propriedade correto).
// test('verifica se a função retorna undefined ao obter propriedade inexistente', () => {
//     const objeto = { nome: 'Sandro', idade: 24 };
//     expect(teste.obterPropriedade(objeto, 'email')).toBeUndefined();
// });

// //toBeDefined = ao contrário de undefined
// test('verifica se a função retorna um objeto definido ao criar usuário válido', () => {
//     expect(teste.criarUsuario('Sandro', 29)).toBeDefined();
// });

// //toBeNull = corresponde a apenas nulo
// test('verifica se a funução retorna null ao pesquisar produto inexistente', function () {
//     expect(teste.pesquisarProduto('Smartwatch')).toBeNull();
// });

// //toBeGreaterThan = compara se o valor e maior que o esperado
// test('verifica se a função retorna um número maior ao dobrar', () => {
//     expect(teste.dobrarNumero(5)).toBeGreaterThan(5);
// });

// //ToBeLessThan = compara se o valor e menor que o esperado
// test('verifica se a função retorna um número menor que o dobro', () => {
//     expect(teste.dobrarNumero(5)).toBeLessThan(20);
// }); 

// //toBeGreaterThanOrEqual = verifica se o valor é maior ou igual ao original
// test('verifica se a função retorna um salário maior ou igual após o aumento', () => {
//     expect(teste.aumentarSalario(1000, 10)).toBeGreaterThanOrEqual(1100);
// });

// //toBeLessThanOrEqual = verifica se o valor é menor ou igual ao original
// test('verifica se a função retorna um salário menor ou igual após o aumento', () => {
//     expect(teste.aumentarSalario(1000, 10)).toBeLessThanOrEqual(1100);
// });

// //toMatch = verifica se as strings são iguais
// test('verifica se a função retorna um endereço de e-mail formatado corretamente', () => {
//     expect(teste.formatarEmail('Sandro',' senac.br')).toMatch('sandro@senac.br');
// });

// //toContain = verifica se o vetor ou objeto contém um valor
// test('verifica se a função retorna true ao verificar a presença de um elemento na lista', () => {
//     const lista = ['maçã', 'banana', 'laranja'];
//     const elemento = 'banana';
//     const listaModificada = teste.comtemElemento(lista, elemento)
//     expect(listaModificada).toContain(elemento);
// });






//----01----//

test('exe 01', () =>{
    expect(teste.mesclarObjetos([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6]);

});


test('exe 02', () =>{
    expect(teste.ehPrimo(65)).toBe(true)
})


test('exe 03', () =>{
    expect(teste.dividirPorZero(5, 0)).toBe(true)
})