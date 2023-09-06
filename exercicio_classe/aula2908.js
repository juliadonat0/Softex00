// pq deu errado? debugar!
var somaPar = 0
for (let numero = 0; numero <= 6; numero++) {
    if (numero % 2 === 0) {
        somaPar += numero
    }
}
console.log(somaPar)

console.log("while")
let contador = 0
let soma = 0
while (contador <= 6) {
    if (contador % 2 === 0) {
        (soma += contador)
    }
    contador++
}
console.log(soma)

console.log("do - while")
contador = 0
soma = 0
do {
    if (contador % 2 === 0) {
        (soma += contador)
    }
    contador++
} while (contador <= 6)
console.log(soma)


const readline = require("readline-sync");
let valorDia = 30
let numeroDiasTrabalhado = (readline.question(" Qual o número de dias trabalhados? "))
let imposto = 0.08

console.log( `Valor Bruto ${valorDia*numeroDiasTrabalhado}`)
console.log (`Valor do Imposto ${(valorDia*numeroDiasTrabalhado)*imposto}`)
console.log(`O valor líquido a receber será: RS ${((numeroDiasTrabalhado * valorDia) - ((valorDia*numeroDiasTrabalhado)*imposto))}`)