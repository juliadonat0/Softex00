//1. Crie um programa que recebe do teclado um número e tenta dividir por zero dentro de um 
//bloco try...catch. Capture o erro e o exiba "Erro: Divisão por zero" no console.

console.log("EXERCÍCIO 1 - TRY...CATCH") // Em javascript a divisão por zero não retorna um erro. Retorna infiniy 
console.log(divisao(10, 0))
function divisao(dividendo, divisor) {
    try {
        return dividendo / divisor
    } catch (erro) {
        console.log(" Erro: Divisão por zero no console")
    }
}

//2. Crie um programa que recebe do teclado uma string não numérica em um número
// utilizando parseInt dentro de um bloco try...catch. 
//Capture o erro e o exiba "Erro: Conversão inválida" no console.

console.log('exercicio 2')
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


console.log("EXERCÍCIO 3 - TRY...CATCH")

tentaAcessarObjeto("Julia")
function tentaAcessarObjeto(pessoa) {
    try {
        return Pessoa.nome;
    } catch (error) {
        console.log('Propriedade nao encontrada')
        console.log(error)
    }
}
