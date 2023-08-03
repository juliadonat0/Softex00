// 1. imprima os número de 1 a 10

exercicio1()
function exercicio1() {
    let numero = 1

    while (numero <= 10) {
        console.log(numero)
        numero++
    }
}
//2. Calcule a soma dos número de 1 a 100 
exercicio2()
function exercicio2() {

    let contador = 1
    let soma = 0
    while (contador <= 100) {
        (soma += contador)
        contador++
    }
    console.log(soma)
}

// 3.Conte e imprima a quantidade de número pares de 1 a 50.
exercicio3()
function exercicio3() {
    var num = 1;
    var par = 0
    while (num <= 50) {
        var resto = num % 2;
        if (resto == 0) {
            par++

        }
        num = num + 1;
    }
    console.log("a quantidade de números pares é: ", par)
}

// 4 Multiplique um número por 2 até o resultado ser maior que 1000
// tentativa... tem que colocar num valor no resultado para rodar o "programa". 
//Não precisa mostrar resposta.

exercicio4()
function exercicio4() {
    var resultado = 1000
    while (resultado <= 1000) {
        resultado = resultado * 2
    }
    console.log("O número final foi: ", resultado)
}

// 5. Verifique se um número é primo
exercicio5()
function exercicio5() {
    var x = 13
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

// 6. Faça o usuário digitar sua senha até que seja digitada a senha correta.
exercicio6()
function exercicio6() {
    const readline = require("readline-sync");
    var senhaUser = readline.question("Digite sua senha: ");
    const SENHA = "C@sa"
    while (senhaUser != SENHA) {
        senhaUser = readline.question("Senha incorreta. Digite novamente!! ");
    }
    console.log(`A senha ${senhaUser} está correta!!`)
}

// 7. Imprima os múltiplos de 3 de 1 a 30.
exercicio7()
function exercicio7() {
    let numero = 1

    while (numero <= 30) {
        console.log(numero * 3)
        numero++
    }
}

//8. Calcule a média de uma lista de números
//lista.lenght= tamanho dos valores do []

exercicio8()
function exercicio8() {
    var listaNumeros = [1, 4, 6, 9]
    var contador = 0
    var soma = 0
    while (contador < listaNumeros.length) {
        soma = soma + listaNumeros[contador]
        contador++
    }
    console.log("A média é: ", soma / listaNumeros.length)
}

//9. Calcule o fatorial de um número
exercicio9()
function exercicio9() {

    var numero = 6
    var contador = 1
    var resultado = 1
    while (contador <= numero) {
        resultado = (resultado * contador)
        contador++
    }
    console.log(`O fatorial de ${numero} é: ${resultado}`)
}

// 10. Imprima os números de 10 a 1 em ordem decrescente

exercicio10()
function exercicio10() {

    var numero = 10

    while (numero >= 1) {
        console.log(numero--)
    }
}