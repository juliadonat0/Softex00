//1. Dado um array de números [3, 7, 2, 9, 5], crie um loop "for" 
//que itere pelo array e exiba cada elemento no console.

console.log("EXERCÍCIO 1")
const array = [3, 7, 2, 9, 5]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}


//2. Suponha que você tenha um objeto com valores numéricos: {a: 10, b: 20, c: 30, d: 40}.
// Utilize um laço "for...in" para iterar pelas chaves do objeto e 
//calcular a soma de todos os valores.
console.log("EXERCÍCIO 2 = FOR...IN")
const dados = { a: 10, b: 20, c: 30, d: 40 };
let soma = 0

for (let i in dados) {
    soma += dados[i]
}
console.log(soma)


//3. Dado um array de números [12, 5, 8, 21, 16, 7], crie um loop "for" que itere pelo array,
// verificando se cada número é par. Se for par, adicione-o a um novo array. 
//No final, exiba o novo array com os números pares.
console.log("EXERCÍCIO 3 = FOR...OF")

numeros = [12, 5, 8, 21, 16, 7]
par = []

for(let i of numeros){
    if(i%2===0){
       par.push(i);
    }
}
console.log(par);


//4. Considere um objeto com informações de estudantes: const estudantes = {alice:18, bob:20, carol:19,
// david:21}; utilize um loop "for...in" para verificar se há um estudante com a idade de 19 anos.
//Se sim, exiba "Nome do estudante: idade" no console.
console.log("EXERCÍCIO 4")

const estudantes = [ {Nome:"Alice", Idade: 18 }, {Nome:"bob", Idade: 20 }, {Nome:"carol", Idade: 19 }, {Nome:"david", Idade: 21 }];

for (let i in estudantes){
    if( estudantes[i].Idade === 19){
        console.log(estudantes[i])
    }
}


//5. Imagine que você tem uma matriz bidimensional representando uma grade de pontos: 
//const pontos = [[2,5,8], [3,9,12], [4, 6, 10]]. Utilize dois loops "for" aninhados para calcular
//a soma de todos os elementos da matriz e exibir o resultado.

console.log("EXERCÍCIO 5")
const matriz = [[2, 5, 8], [3, 9, 12], [4, 6, 10]]

let resultado = 0;
for (const linha in matriz) {
    for (const coluna in matriz[linha]) {
        resultado += matriz[linha][coluna]
    }
}
console.log("A soma é: ", resultado)

//calcular a linha
console.log("EXERCÍCIO 5 - Cálculo das linhas")
for (const linha in matriz) {
    let resultado = 0;
    for (const coluna in matriz[linha]) {
        resultado += matriz[linha][coluna]
    }
    console.log(`A soma da linha ${linha} é: ${resultado}`)
}

//calcular a coluna
console.log("EXERCÍCIO 5 - Cálculo das colunas")
for (const coluna in matriz) {
    let resultado = 0;
    for (const linha in matriz[coluna]) {
        resultado += matriz[linha][coluna]
    }
    console.log(`A soma da coluna ${coluna} é: ${resultado}`)
}

// // OUTRA OPÇÃO
// let somar = 0
// let linha = 0; linha < matriz.length; linha++
// for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
//     somar += matriz[linha][coluna];
// }
// console.log("A soma é: ", somar)