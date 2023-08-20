const readline = require("readline-sync");
var nota1 = parseInt(readline.question("Digite a primeira nota: "))
var nota2 = parseInt(readline.question("Digite a segunda nota: "))
var nota3 = parseInt(readline.question("Digite a terceira nota: "))

console.log(calcMedia(nota1, nota2, nota3))
function calcMedia(nota1, nota2, nota3) {
    var soma = (nota1 + nota2 + nota3)
    var divide = soma / 3
    return divide
}
