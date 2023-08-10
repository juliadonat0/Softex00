//Valores Padrão. Aula dia 10/08/23
//exibirSaudacao()
//function exibirSaudacao( nome = 'Julia', saudacao = 'hello', mensagem = 'Bom dia!') {
//console.log(`${saudacao}, ${nome}. ${mensagem}`);
//}

//1. Crie uma função chamada saudacao que aceita um parâmetro nome para uma pessoa e exiba no
//console a saudação "Olá, [nome]!" utilizando um valor padrão para nome caso nenhum seja fornecido.

console.log("EXERCÍCIO 1")
saudacao("Heitor") // se deixar sem um nome vai imprimir o Julia da linha 12
function saudacao(nome = "Julia") {
    console.log(`Olá, ${nome}`)
}




//2. Escreva uma função chamada calculadora que receba dois números (num1 e num2) e um operador
//matemático (operacao) como parâmetros. A função deve realizar a operação matemática entre num1 e
//num2 (por exemplo, adição, subtração, multiplicação, divisão) com um valor padrão de operação
//sendo "+"

console.log("EXERCÍCIO 2")
calculadora(4, 6)
function calculadora(num1, num2, operacao = "+") {
    switch (operacao) {
        case ("+"):
            var soma = (num1 + num2)
            console.log(`a soma entre ${num1} e ${num2} é: ${soma}`);
            break
        case ("-"):
            console.log(num1 - num2)
            break
        case ("/"):
            console.log(num1 / num2)
            break
        case ("*"):
            console.log(num1 * num2)
            break
        default:
            console.log("operação inválida")
    }
}

//3. Crie uma função chamada contagemRegressiva que aceite um parâmetro inicio para iniciar a
//contagem regressiva. A função deve exibir no console uma contagem regressiva a partir do
//número fornecido até 1, utilizando um valor padrão de início igual a 10.

console.log("EXERCÍCIO 3")
contagemRegressiva(10)
function contagemRegressiva(inicio) {
    for (inicio; inicio >= 1; inicio--) {
        console.log(inicio)
    }
}

//4. Escreva uma função chamada apresentação que aceite três parâmetros: nome, idade e profissão.
//A função deve exibir no console uma mensagem de apresentação no formato "Olá, eu sou [nome], 
// tenho [idade] anos e sou [profissão]." , utilizando valores padrão para os parâmetros caso nenhum
//seja fornecido.

console.log("EXERCÍCIO 4")
apresentacao("José", 87, "aposentado")
function apresentacao(nome = "Julia", idade = 35, profissao = "contadora") {
    console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}.`)
}

//5. Crie uma função chamada mensagemPersonalizada que receba um parâmetro estilo para o estilo
//da mensagem (por exemplo, "normal", "negrito", "itálico"), com um valor padrão de estilo sendo
//"normal". A função deve exibir no console o texto fornecido com o estilo especificado.
