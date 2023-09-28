//1. Crie um programa que recebe do teclado um número e tenta dividir por zero dentro de um 
//bloco try...catch. Capture o erro e o exiba "Erro: Divisão por zero" no console.

console.log("EXERCÍCIO 1") // Em javascript a divisão por zero não retorna um erro. Retorna infiniy 
let dividendo = 10
let divisor = 0
try {
    if (divisor === 0) {
        throw "Valor negado"
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

//2. Crie um programa que recebe do teclado uma string não numérica em um número
//utilizando parseInt dentro de um bloco try...catch. 
//Capture o erro e o exiba "Erro: Conversão inválida" no console.

console.log('EXERCÍCIO 2')
var str = "25T";
try {
    var number = Integer.parseInt(str);
    System.out.println(number);
}
catch (ex) {
    console.log("Erro: Conversão inválida")
}


//3. Crie um programa que recebe do teclado um objeto e tente acessar uma propriedade
// inexistente desse objeto dentro de um bloco try...catch. Capture o erro e o 
//exiba "Erro: Propriedade não encontrada" no console.


console.log("EXERCÍCIO 3")

tentaAcessarObjeto("Julia")
function tentaAcessarObjeto(pessoa) {
    try {
        return Pessoa.nome;
    } catch (error) {
        console.log('Propriedade nao encontrada')
        //console.log(error) se ativar, aparece a referência do erro
    }
}
