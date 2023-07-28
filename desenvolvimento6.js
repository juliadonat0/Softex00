const readline = require("readline-sync");


var num1 = Number(readline.question ("Digite o primeiro número: "));
var num2 = Number(readline.question ("Digite o segundo número: "));
var operacao = readline.question ("Qual a operação matematica: ");

calculadora (num1,num2,operacao)

function calculadora(num1,num2,operacao){
  
  switch (operacao){
      case ("soma"): 
          console.log ("A soma é: ", num1+num2)
        break
      case ("subtração"): 
          console.log ("A subtração é: ", num1-num2)
          break
      case ("multiplicacao"):  
          console.log ("A multiplicacao é: ", num1*num2)
          break
      case ("divisao"): 
          console.log ("A divisao é: ", num1/num2)
          break
      default: 
          console.log ("Operação não existe. O resultado é 0")
  }
}


