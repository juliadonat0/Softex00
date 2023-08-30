// const readline = require("readline-sync");

// console.log("Exercício 1")
// var aluno = (readline.question("Nome do Aluno: "))
// var nota1 = parseInt(readline.question("Digite a primeira nota: "))
// var nota2 = parseInt(readline.question("Digite a segunda nota: "))
// var nota3 = parseInt(readline.question("Digite a terceira nota: "))


// function calcMedia(nota1, nota2, nota3) {
//     var soma = (nota1 + nota2 + nota3)
//     var divide = soma / 3
//     return divide
// }

// console.log(`Nome do Aluno: ${(aluno)}. Média: ${(calcMedia(nota1, nota2, nota3))}`)


// // ANO BISSEXTO
// console.log("Exercício 2")
// const readline = require("readline-sync");

// var ano = parseInt(readline.question("Digite o ano: "))

// if (ano % 400 == 0) {
//     console.log(`O ano ${ano} é bissexto.`)
// } else if (ano % 4 == 0 && ano % 100 != 0) {
// console.log (`O ano ${ano} é bissexto.`)
// } else{
//     console.log (`O ano ${ano} NÃO é bissexto.`) 
// }


// TAXAÇÃO
// console.log("Exercício 3")
// const readline = require("readline-sync");

// var valor = (readline.question("Digite o valor do produto: "))
// let estado = (readline.question("Qual o estado? utilize letra minúscula "))

// switch (estado) {
//     case ("mg"):
//         var valorFinal = (valor * 1.07)
//         console.log(`o valor a ser pago é ${valorFinal}`);
//         break
//     case ("sp"):
//         var valorFinal = (valor * 1.12)
//         console.log(`o valor a ser pago é ${valorFinal}`);
//         break
//     case ("rj"):
//         var valorFinal = (valor * 1.15)
//         console.log(`o valor a ser pago é ${valorFinal}`);
//         break
//     case ("ms"):
//         var valorFinal = (valor * 1.08)
//         console.log(`o valor a ser pago é ${valorFinal}`);
//         break
//     default:
//         console.log("operação inválida")
// }

//SOMA DOS 50 PRIMEIROS NÚMEROS PARES
console.log("Exercício 4 - FOR")
let somaPar = 0
for (let numero = 0; numero <= 50; numero += 2) {
    somaPar += numero
}
console.log(somaPar)


console.log("Exercício 4 - WHILE")
exercicio4()
function exercicio4() {

    let contador = 0
    let soma = 0
    while (contador <= 4) {
        (soma += contador)
        contador++
    }
    console.log(soma/2)
}


// console.log("Exercício 4 - DO WHILE")