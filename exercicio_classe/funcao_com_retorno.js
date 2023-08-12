//QUESTÃO SLIDE
console.log("Questão Slide")
criarMensagemDeSaudacao()
function criarMensagemDeSaudacao(nome = "Ana") {
    const mensagem = `Hello, ${nome}`;
    return mensagem
}
let receberFuncao = criarMensagemDeSaudacao("pedro") // se não colocar nome, vai aparecer "Ana"
console.log(receberFuncao)

//1. Crie uma função chamada somar que aceite dois números como parâmetros e retorne a soma deles.
console.log("EXERCÍCIO 1")
console.log(somar(30, 70))

function somar(num1, num2) {
    return num1 + num2
}

//2. Escreva uma função chamada ehPar que aceite um número com parâmetro e retorne true se o número
//for par e false caso contrário.

console.log("EXERCÍCIO 2")
console.log(ehPar(8))

function ehPar(numero) {
    return numero % 2 == 0
}

//3. Crie uma função chamada maiorNumero que receba três números como parâmetros e retorne o maior deles.
console.log("EXERCÍCIO 3")
console.log(`O maior número é: `, maiorNumero(30, 58, 333))
function maiorNumero(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1
    } else if (num2 > num1 && num2 > num3) {
        return num2
    } else {
        return num3
    }

}



//4. Escreva uma função chamada calcularIMC que receba o peso e a altura de uma pessoa como parâmetros 
//e retorne o índice de massa corporal (IMC) calculado.
console.log("EXERCÍCIO 4")
var resultadoIMC = calcularIMC(90, 1.81)
console.log(`O resultado do IMC é: `, resultadoIMC, `E a classificação é: `, classificacaoIMC(resultadoIMC))

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2)
}
function classificacaoIMC(imc) {
    if (imc < 18.5) {
        return "MAGREZA"
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "NORMAL"
    } else if (imc >= 25 && imc <= 29.9) {
        return "SOBREPESO"
    } else if (imc >= 30 && imc <= 39.9) {
        return "OBESIDADE"
    } else {
        return "OBESIDADE GRAVE"
    }
}

// outra opção de resolução

console.log(calcularIMC2(190, 1.81))
function calcularIMC2(peso, altura) {
    var imc = peso / Math.pow(altura, 2)

    if (imc < 18.5) {
        return "O imc é " + imc + "isso é MAGREZA"
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "O imc é " + imc + "isso é NORMAL"
    } else if (imc >= 25 && imc <= 29.9) {
        return "O imc é " + imc + "isso é SOBREPESO"
    } else if (imc >= 30 && imc <= 39.9) {
        return "O imc é " + imc + "isso é OBESIDADE"
    } else {
        return `O imc é " ${imc}.  Isso é OBESIDADE GRAVE`
    }
}

//5. Crie uma função chamada contarVogais que aceite uma string como parâmetro 
//e retorne o número de vogais (a, e, i, o, u) presentes na string.
console.log(contarVogais("paralelepipedo"))
function contarVogais(palavra) {

    var arrayPalavra = palavra.split("")
    var contadorVogais = 0
    for (let contador = 0; contador < arrayPalavra.length; contador++) {
        let letra = arrayPalavra[contador]
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            contadorVogais++
        }
    }
    return "A quantidade de vogais é : " + contadorVogais
}

//6. Escreva uma função chamada celsiusParaFahrenheit que receba uma temperatura em graus Celsius 
//como parâmetro e retorne o valor equivalente em Fahrenheit.
console.log(celsiusParaFahrenheit(20))
function celsiusParaFahrenheit(celsius) {
    return (celsius * 1.8) + 32
}


//7. Crie uma função chamada gerarSenha que aceite um parâmetro tamanho (número inteiro) e 
//retorne uma senha aleatória com o tamanho especificado.
console.log (gerarSenha(14))
function gerarSenha(tamanho) {
    let senha = ""
    for (var contador = 0; contador < tamanho; contador++){
        senha = senha + Math.floor(Math.random()*10)
    }
        return senha
}