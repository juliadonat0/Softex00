// função sem retorno e sem parâmetros
function funcao01(): void { //void=sem retorno
    console.log("primeira função");
}

funcao01()

// funcao com retorno e sem parâmetros
function funcao02(): string {
    return "segunda função";
}
console.log(funcao02())



// função com retornoe com parâmetro
function funcao03(nome: string): void {
    console.log("Bom dia" + " " + nome)
}
funcao03("Bob")

// função com retorno e com parâmetro
function funcao04(num1: number, num2: number): number {
    return num1 + num2
}
console.log(funcao04(10.1, 7.3))



// 1. Crie uma função chamada saudacao que exiba a mensagem "Olá, mundo!" no console quando for chamada.
console.log("exercício1")
function exercicio1(): string {
    return "Olá, mundo"
}
console.log(exercicio1())

//2.Escreva uma função chamada dobro que aceite um parâmetro num e exiba o dobro
// desse número no console.
console.log("exercício 2")
function dobro(numero: number): number {
    return (numero * 2)
}
console.log(dobro(45))


// 3. Crie uma função chamada mostrarNumeros que receba dois parâmetros, inicio e fim. 
//Essa função deve exibir todos os números inteiros no intervalo de inicio a fim
// (inclusive) no console.
console.log("exercício 3")
function mostrarNumeros(numero: number): number {
    while (numero >= 1) {
        console.log(numero)
        numero--
    }
    return numero
}
console.log(mostrarNumeros(5))

// // 4. Escreva uma função chamada verificarPar que aceite um número como entrada e
// // exiba no console se o número é par ou não.
console.log("exercício 4")
function verificarPar(numero: number): number {
    if (numero % 2 === 0) {
        console.log(`O ${numero} é par.`)
    } else {
        console.log(`O ${numero} é ímpar.`)
    }
    return numero
}
verificarPar(91)


// 5. Crie uma função chamada imprimirLista que aceite um array como parâmetro e
// exiba cada elemento desse array no console, um por um.

console.log("exercício 5")
function imprimirLista(frutas: Array<string>): void {

    for (let index = 0; index < frutas.length; index++)
        console.log(frutas[index])
}

imprimirLista(["manga", "melão", "mamão"])



// 6. Escreva uma função chamada calcularMedia que receba um array de números como
// parâmetro e calcule a média desses números. Não é necessário exibir o resultado,
// apenas retorne o valor da média.
console.log("exercício 6")
function calcularMedia(numeros: Array<number>): number {
    var soma = 0
    for (let contador = 0; contador < numeros.length; contador++){
        soma = soma + numeros[contador]
    }
    return soma/numeros.length
}

console.log(calcularMedia([10,20,30]))


// 7. Crie uma função chamada maiorNumero que receba um array de números como
// parâmetro e exiba o maior número presente no array no console.
console.log("exercício 7")
function maiorNumero(numeros: Array<number>): number {
    let maior = 0

    for (let contador = 0; contador < numeros.length; contador++) {
        if (numeros[contador] > maior) {
            maior = numeros[contador]
        }
    }
    return maior
}
console.log(maiorNumero([100,250,300]))


//8. Escreva uma função chamada contarVogais que aceite uma string como parâmetro e
// conte quantas vogais (a, e, i, o, u) ela contém. Exiba o resultado no console.
console.log("exercício 8")
//function contarVogais():string{


    
//}



// 9. Crie uma função chamada imprimirTabuada que aceite um número como entrada e
// exiba a tabuada desse número de 1 a 10 no console.

//10.Escreva uma função chamada verificarPrimo que receba um número como parâmetro e
// exiba no console se o número é primo ou não.