//1. Crie uma função chamada saudação que exiba a mensagem "Nome e data de aniversário" no console 
//quando chamada.
console.log("EXERCÍCIO 1")

exibirSaudacao('Julia', '04', 'fevereiro')
function exibirSaudacao(nome, dia, mes) {
    console.log(`Hello, ${nome}. Sua data de aniversário é: ${dia} ${mes}.`)
}

//2. Escreva uma função chamada dobro que aceite um parâmetro num e exiba o dobro desse número.

console.log("EXERCÍCIO 2")
dobro()
function dobro(num) {
    const readline = require("readline-sync");
    var num = readline.question("Digite um número: ")
    let resultado = num * 2
    console.log(`O dobro do número ${num} é: ${resultado}`)
}

//3. Crie uma função chamada mostrarNumeros que receba dois parâmetros, início e fim.
//Essa função deve exibir todos os números inteiros no intervalo de início e fim.

console.log("EXERCÍCIO 3")

mostrarNumeros(1, 5)
function mostrarNumeros(inicio, fim) {
    for (let num = inicio; num <= fim; num++)
        console.log(num)
}

//4. Escreva uma função chamada verificarPar que aceite um número como entrada e exiba se o 
//número é par ou não.

console.log("EXERCÍCIO 4")

verificarPar(341111)
function verificarPar(numero){

var resto = numero % 2 ;
if (resto == 0) {
    console.log(`O numero ${numero} é par.`)
} else {
    console.log(`O numero ${numero} é ímpar.`)}
}

//5. Crie uma função chamada imprimirLista que aceite um array como parâmetro e exiba cada elemento
//desse array no console, um por um.

console.log("EXERCÍCIO 5")

imprimirLista()
function imprimirLista()




