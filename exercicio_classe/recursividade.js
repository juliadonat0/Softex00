//Funções Recursivas
//1. Crie uma função recursiva chamada somaRecursiva que receba um número inteiro positivo n como
//argumento e calcule a soma de todos os números inteiros de 1 até n.

console.log("a soma é: ", somaRecursiva(5))
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