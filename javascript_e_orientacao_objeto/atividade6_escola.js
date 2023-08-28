const readline = require("readline-sync");
function exercicio1() {
    var nota1 = parseInt(readline.question("Digite a primeira nota: "))
    var nota2 = parseInt(readline.question("Digite a segunda nota: "))
    var nota3 = parseInt(readline.question("Digite a terceira nota: "))
    var media = (nota1 + nota2 + nota3) / 3

    console.log(media >= 7 ? "aprovado" : "reprovado")
}
exercicio1()

function exercicio2() {
    var nota1 = parseInt(readline.question("Digite a primeira nota: "))
    var nota2 = parseInt(readline.question("Digite a segunda nota: "))
    var nota3 = 21- (nota1 + nota2) 

    console.log(nota3 > 10 ? `O aluno precisa da nota ${nota3}. Impossível!!!`: `O aluno precisa de ${nota3} para ser aprovado. Estude!!!`)
}

exercicio2()