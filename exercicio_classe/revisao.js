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
// console.log("Exercício 4 - FOR")
// let somaPar = 0
// for (let numero = 0; numero <= 50; numero += 2) {
//     somaPar += numero
// }
// console.log(somaPar)


// console.log("Exercício 4 - WHILE")
// exercicio4()
// function exercicio4() {

//     let contador = 0
//     let soma = 0
//     while (contador <= 4) {
//         (soma += contador)
//         contador++
//     }
//     console.log(soma / 2)
// }


// console.log("Exercício 4 - DO WHILE")


//5. Faça um programa em Javascript que receba do usuário um número N e 
//depois imprima os N primeiros números naturais ímpares.

// console.log("EXERCÍCIO 5")
// exercicio5()
// function exercicio5() {

//     for (let numero = 0; numero <= 10; numero++) {
//         if (numero % 2 !== 0) {
//             console.log(`O número é ímpar:, ${numero}`)
//         }
//     }
// }

//6. Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que solicite
// o número de dias trabalhados pelo encanador e imprima a quantia líquida que deverá ser paga,
// sabendo-se que são descontados 8% para pagamento de impostos e taxas devidas.

// console.log("EXERCÍCIO 6")
// const readline = require("readline-sync");
// let valorDia = 30
// let numeroDiasTrabalhado = (readline.question(" Qual o número de dias trabalhados? "))
// let imposto = 8

// console.log( `Valor Bruto ${valorDia*numeroDiasTrabalhado}`)
// console.log (`Valor do Imposto ${((valorDia*numeroDiasTrabalhado)*imposto)/100}`)
// console.log(`O valor líquido a receber será: RS ${(((numeroDiasTrabalhado * valorDia) - ((valorDia*numeroDiasTrabalhado)*imposto)/100))}`)


//7. Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração, 
//em segundos, de uma experiência biológica. O programa deve informar o horário 
//(hora:minuto:segundo) de término da mesma.

//8. Uma empresa paga R$ 10,00 por hora normal trabalhada e R$ 15,00 por hora extra. 
//Escreva um programa que leia o total de horas normais e o total de horas extras trabalhadas
// por um empregado em um ano e calcule o salário anual deste trabalhador.

//9. Elabore um programa em JS para que leia três números e mostre-os em ordem crescente.
// console.log("EXERCÍCIO 9")
// exercicio9()
// function exercicio9() {
//     for (let numero = 3; numero >= 1; numero--) {
//         console.log(numero)
//     }
// }

// 10. Crie um programa de conversão entre as temperaturas Celsius, Farenheit e Kelvin usando
// funções para isso. O programa deve ler a opção escolhida pelo usuário, que escolhe uma 
//determinada conversão entre escalas termométricas e, em seguida, o programa solicita a 
//temperatura a ser convertida. As opções de conversão são as seguintes:
// utilize o switch case
// 1.	de Celsius para Fahrenheit.
// 2.	de Celsius para Kelvin.
// 3.	de Fahrenheit para Celsius.
// 4.	de Fahrenheit para Kelvin.
// 5.	de Kelvin para Celsius.
// 6.	de Kelvin para Fahrenheit
// console.log("EXERCÍCIO 10")
// const readline = require("readline-sync");

// let temperatura = parseInt(readline.question("Digite a temperatura: "))
// let escalaConversao = (readline.question("Qual a escala de conversão"))

// switch (escalaConversao) {
//     case ("cf"):
//         var celsiusParaFahrenheit = (temperatura * 1.8) + 32
//         console.log(`A temperatura ${temperatura} Celsius equivale a: ${celsiusParaFahrenheit} Fahrenheit`);
//         break
//     case ("ck"):
//         var celsiusParaKevin = temperatura + 273.15
//         console.log(`A temperatura ${temperatura} Celsius equivale a: ${celsiusParaKevin} Kevin`);
//         break
//     case ("fc"):
//         var fahrenheitParaCelsius = (temperatura - 32) * 5 / 9
//         console.log(`A temperatura ${temperatura} Fahrenheit equivale a: ${fahrenheitParaCelsius} Celsius`);
//         break
//     case ("fk"):
//         var fahrenheitParaKevin = (temperatura - 32) * 5 / 9 + 273.15
//         console.log(`A temperatura ${temperatura} Fahrenheit equivale a: ${fahrenheitParaKevin} Kevin`);
//         break
//     case ("kc"):
//         var kevinParaCelsius = temperatura - 273.15
//         console.log(`A temperatura ${temperatura} Kevin equivale a: ${kevinParaCelsius} Celsius`);
//         break
//     case ("kf"):
//         var kevinParaFahrenheit = (temperatura - 273.15) * 9/5 + 32
//         console.log(`A temperatura ${temperatura} Kevin equivale a: ${kevinParaFahrenheit} Fahrenheit`);
//         break

//     default:
//         console.log("operação inválida")
// }

//11. Fazer uma função que recebe um mês e um ano como parâmetros e retorna o número de dias daquele mês daquele ano. Dica: um ano é bissexto quando é múltiplo de 4 e não múltiplo de 100, ou também quando é múltiplo de 400.
// 12. Faça uma função que recebe, por parâmetro, a hora de início e a hora de término de um jogo, ambas subdivididas em 2 valores distintos: horas e minutos. A função deve retornar, a duração do jogo em minutos, considerando que o tempo máximo de duração de um jogo é de 24 horas e que o jogo pode começar em um dia e terminar no outro.
//13. Escreva a função para cálculo do N-ésimo termo da série de Fibonacci utilizando recursividade.
console.log("EXERCÍCIO 13")

function fibonacci(posicao) {
    if (posicao == 1) {
        return 0
    } else if (posicao == 2) {
        return 1
    } else {
        return fibonacci(posicao - 1) + fibonacci(posicao - 2)
    }
}
console.log(fibonacci(13))