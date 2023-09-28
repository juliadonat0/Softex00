const readline = require("readline-sync");

let dividendo = readline.question("Qual o dividendo da operação? ")
let divisor = readline.question("Qual o divisor da operação? ")

try {
    if (divisor === 0) {
        throw  ( "Valor negado")
    } else {
        let result = dividendo / divisor
        console.log(`O resultado é: ${result}`)
    }
} catch (erro) {
    console.log(" Erro: Divisão por zero")
}
finally {
    console.log("Fim do método")
}