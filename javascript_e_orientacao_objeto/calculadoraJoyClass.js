const readline = require("readline-sync");
var num1 = parseInt(readline.question("Digite o primeiro número: "))
var num2 = parseInt(readline.question("Digite o segundo número: "))
var operacao = (readline.question("Qual a operação "))

switch (operacao) {
    case ("+"):
        var soma = (num1 + num2)
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break
    case ("-"):
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break
    case ("*"):
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break
    case ("/"):
        console.log(`${num1} / ${num2} o resultado é ${num1 / num2} e o resto é ${num1 %= num2}`);
        break
    default:
        console.log("operação inválida")
}

