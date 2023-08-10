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
somar(30, 70)
function somar(num1, num2) {
    return somar = (num1 + num2)
}
let receberSoma = somar
console.log(receberSoma)

//2. Escreva uma função chamada ehPar que aceite um número com parâmetro e retorne true se o número
//for par e false caso contrário.

//CORRIGIR!!!!
console.log("EXERCÍCIO 2")
ehPar()
function ehPar(numero = 7) {
    numero % 2 == 0
    return numero % 2 == 0
}
let resultado = ehPar
console.log(resultado)