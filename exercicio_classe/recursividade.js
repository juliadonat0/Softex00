//Funções Recursivas
//1. Crie uma função recursiva chamada somaRecursiva que receba um número inteiro positivo n como
//argumento e calcule a soma de todos os números inteiros de 1 até n.

console.log("a soma é: ", somaRecursiva(3))
function somaRecursiva(numero) {
    if (numero == 1) {
        return 1
    }
    return numero + somaRecursiva(numero - 1)
}

console.log("EXERCÍCIO 1- outra forma")
function somaRecursividade(numero) {
    if (numero == 1 || numero == 0) {
        return 1
    } else {
        return numero + somaRecursividade(numero - 1)
    }
}
const numero = 5
console.log(`A soma do ${numero} é ${somaRecursividade(numero)}`)







/* 
    5 + (somaRecursiva -> 5-1)
    4 + (somaRecursiva -> 4-1)
    3 + (somaRecursiva -> 3-1)
    2 + (somaRecursiva -> 2-1)
    1 = 1
*/

//2. Escreva uma função chamada fibonacci que receba um número n como parâmetro e
// retorne o n-ésimo termo da sequência de Fibonacci. Lembre-se de implementar essa 
//função de forma recursiva.


console.log("EXERCÍCIO 2 - FIBONACCI")
function fibonacci(posicao) {
    if (posicao == 1) {
        return 0
    } else if (posicao == 2) {
        return 1
    } else {
        return fibonacci(posicao - 1) + fibonacci(posicao - 2)
    }
}
console.log(fibonacci(5))





//1. Crie um programa que recebe do teclado um número e tenta dividir por zero dentro de um bloco try...catch. Capture o erro e o exiba "Erro: Divisão por zero" no console.
//2. Crie um programa que recebe do teclado uma string não numérica em um número utilizando parseInt dentro de um bloco try...catch. Capture o erro e o exiba "Erro: Conversão inválida" no console.
//3. Crie um programa que recebe do teclado um objeto e tente acessar uma propriedade inexistente desse objeto dentro de um bloco try...catch. Capture o erro e o exiba "Erro: Propriedade não encontrada" no console.

//1. Dado um array de números [3, 7, 2, 9, 5], crie um loop "for" que itere pelo array e exiba cada elemento no console.
//2. Suponha que você tenha um objeto com valores numéricos: {a: 10, b: 20, c: 30, d: 40}. Utilize um laço "for...in" para iterar pelas chaves do objeto e calcular a soma de todos os valores.
//3. Dado um array de números [12, 5, 8, 21, 16, 7], crie um loop "for" que itere pelo array, verificando se cada número é par. Se for par, adicione-o a um novo array. No final, exiba o novo array com os números pares.
