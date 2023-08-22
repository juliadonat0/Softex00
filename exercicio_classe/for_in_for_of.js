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
console.log("EXERCÍCIO 2 = FOR..IN")
const dados = { a: 10, b: 20, c: 30, d: 40 };
let soma = 0

for (let i in dados) {
    soma += dados[i]
}
console.log(soma)


//3. Dado um array de números [12, 5, 8, 21, 16, 7], crie um loop "for" que itere pelo array,
// verificando se cada número é par. Se for par, adicione-o a um novo array. 
//No final, exiba o novo array com os números pares.
console.log("EXERCÍCIO 3")

numeros = [12, 5, 8, 21, 16, 7]
par = []

for (let i in numeros) {
    (numeros[i] % 2 === 0)
    par = numeros[i]
}
//console.log(par.push(numeros[i]))



//4. Considere um objeto com informações de estudantes: const estudadntes = {alice:18, bob:20, carol:19,
// david:21}; utilize um loop "for...in" para verificar se há um estudante com a idade de 19 anos.
//Se sim, exiba "Nome do estudante: idade" no console.
console.log("EXERCÍCIO 4")

const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 };

//5. Imagine que você tem uma matriz bidimensional representando uma grade de pontos: 
//const pontos = [[2,5,8], [3,9,12], [4, 6, 10]]. Utilize dois loops "for" aninhados para calcular
//a soma de todos os elementos da matriz e exibir o resultado.


const matriz = [[2, 5, 8], [3, 9, 12], [4, 6, 10]]

let resultado = 0;
for (const linha in matriz) {
    for (const coluna in matriz[linha]) {
        soma += matriz[linha][coluna]
    }
}
console.log("A soma é: ", soma)

// OUTRA OPÇÃO
let soma = 0
let linha = 0; linha < matriz.length; linha++
for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
    soma += matriz[linha][coluna];
}
console.log("A soma é: ", soma)