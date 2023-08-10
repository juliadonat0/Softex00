//1. Crie uma função chamada saudação que exiba a mensagem "Nome e data de aniversário" no console 
//quando chamada.
console.log("EXERCÍCIO 1")

exibirSaudacao('Julia', '04', 'fevereiro')
function exibirSaudacao(nome, dia, mes) {
    console.log(`Hello, ${nome}. Sua data de aniversário é: ${dia} ${mes}.`)
}

//2. Escreva uma função chamada dobro que aceite um parâmetro num e exiba o dobro desse número.

console.log("EXERCÍCIO 2")
const readline = require("readline-sync");
var num = readline.question("Digite um número: ")
dobro(num)
function dobro(num) {
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
function verificarPar(numero) {

    var resto = numero % 2;
    if (resto == 0) {
        console.log(`O numero ${numero} é par.`)
    } else {
        console.log(`O numero ${numero} é ímpar.`)
    }
}

//5. Crie uma função chamada imprimirLista que aceite um array como parâmetro e exiba cada elemento
//desse array no console, um por um.

console.log("EXERCÍCIO 5")
let frutas = ['maça', 'banana', 'laranja']
imprimirLista(frutas)

function imprimirLista(frutas) {

    for (let posicaoArray = 0; posicaoArray < frutas.length; posicaoArray++) {
        console.log(frutas[posicaoArray])
    }
}

//6. Escreva uma função chamada calcularMedia que receba um array de números como parâmetro e 
//calcule a média desses números. Não é necessário exibir o resultado, apenas retorne o 
//valor da média.

console.log("EXERCÍCIO 6")
var listaNumeros = [10, 40, 60, 90]
calcularMedia(listaNumeros)
function calcularMedia(array) {

    var contador = 0
    var soma = 0
    while (contador < array.length) {
        soma = soma + array[contador]
        contador++
    }
    console.log("A média é: ", soma / listaNumeros.length)
}


console.log("EXERCÍCIO 6 versão 2")
var listaNumeros2 = [10, 40, 60, 90]
calcularMedia2(listaNumeros2)
function calcularMedia2(listaNumeros2) {
    let soma = 0
    for (let contador = 0; contador < listaNumeros2.length; contador++) {
        soma = soma + listaNumeros2[contador]
    }
    console.log("A média é: ", soma / listaNumeros2.length)
}

//7. Crie uma função chamada maiorNumero que receba um array de números como parâmetro e 
//exiba o maior número presente no array no console.

console.log("EXERCÍCIO 7")
var numeros = [1, 2, 5, 200, 87, 5, 50];
maiorNumero(numeros)
function maiorNumero(numeros) {
    let maior = 0

    for (let contador = 0; contador < numeros.length; contador++) {
        if (numeros[contador] > maior) {
            maior = numeros[contador]
        }
    }
        console.log(maior)
}

//8. Escreva uma função chamada contarVogais que aceite uma string como parâmetro e 
//conte quantas vogais (a, e, i, o, u) ela contém. Exiba o resultado no console.

console.log("EXERCÍCIO 8")
contaVogais("pescaaaaa")
function contaVogais(palavra){
    var arrayPalavra = palavra.split("")
    var contadorVogais = 0
    for(let contador = 0; contador < arrayPalavra.length; contador++){
        let letra = arrayPalavra[contador]
        if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
            contadorVogais++
        }
    }

    console.log("A quantidade de vogais é : ", contadorVogais)
}


//9. Crie uma função chamada imprimirTabuada que aceite um número como entrada e exiba a 
//tabuada desse número de 1 a 10 no console.
console.log("EXERCÍCIO 9")
var numero = 5
imprimirTabuada(numero)
function imprimirTabuada(numero) {
    for(let contador = 1; contador <= 10; contador++){
        console.log(numero * contador)
    }
}

//10. Escreva uma função chamada verificarPrimo que receba um número como parâmetro e
//exiba no console se o número é primo ou não.
var x = 8
verificarPrimo(x)
function verificarPrimo(x) {
    var cont = 1
    var primo = 0
    while (cont <= x) {
        if (x % cont == 0) {
            primo++
        }
        cont++
    }
    if (primo == 2) {
        console.log(`O número ${x} é primo`)
    } else {
        console.log(`O número ${x} não é primo`)
    }
}