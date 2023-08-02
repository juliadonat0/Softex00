//Você deve criar três listas em JavaScript:

//1. para guardar os nomes de dez pessoas;
//2. para guardar as suas idades;
//3. para guardar as suas cores favoritas.
//Em seguida, imprima essas listas.

let pessoas = [
    { nome: 'Ana', idade: 36, cor: 'roxo' },
    { nome: 'João', idade: 14, cor: 'cinza' },
    { nome: 'Paula', idade: 75, cor: 'vermelho' }
];
//console.log(pessoas)

//Depois, faça algumas modificações, alterando uma cor e uma idade. 
//Ao terminar, imprima novamente todas as informações das três listas.

pessoas.splice(1,1, {nome: 'João', idade: 21, cor: 'preto'})
console.log (pessoas)
