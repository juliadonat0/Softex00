//Você deve criar três listas em JavaScript:

//1. para guardar os nomes de dez pessoas;
//2. para guardar as suas idades;
//3. para guardar as suas cores favoritas.
//Em seguida, imprima essas listas.

let pessoas = [
    { nome: 'Ana', idade: 36, cor: 'roxo' },
    { nome: 'Joao', idade: 14, cor: 'cinza' },
    { nome: 'Paula', idade: 75, cor: 'vermelho' },
    { nome: 'Jose', idade: 2, cor: 'azul' },
    { nome: 'Maria', idade: 25, cor: 'branco' },
    { nome: 'Marta', idade: 56, cor: 'rosa' },
    { nome: 'Mauro', idade: 47, cor: 'amarelo' },
    { nome: 'Júlia', idade: 35, cor: 'verde' },
    { nome: 'Carlos', idade: 28, cor: 'prata' },
    { nome: 'Catarina', idade: 77, cor: 'dourado' }
];
console.log(pessoas) 

//Depois, faça algumas modificações, alterando uma cor e uma idade.
//Ao terminar, imprima novamente todas as informações das três listas.

pessoas.splice(1, 1, { nome: 'Igor', idade: 9, cor: 'preto' })
pessoas.splice(2, 1, { nome: 'Nalva', idade: 96, cor: 'rosa' }, { nome: 'Pedro', idade: 81, cor: 'marrom' })
console.log(pessoas)

//EXTRA PARA ESTUDO

// TAMANHO DO ARRAY
//let tamanhoDoArray = pessoas.length;
//console.log(tamanhoDoArray)

//ORDEM DE IDADE
//pessoas.sort(function (x,y){
//   return x.idade -y.idade;
//});
//console.log(pessoas)

//ORDEM ALFABÉTICA
//pessoas.sort(function (x, y) {

    //let a = x.nome.toUpperCase();
    //b = y.nome.toUpperCase();
    //return a == b ? 0 : a > b ? 1 : -1
//});
//console.log(pessoas)