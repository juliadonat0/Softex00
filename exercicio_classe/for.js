//1. imprima os números pares de 1 a 20.
console.log("EXERCÍCIO 1")
exercicio1()
function exercicio1() {
    for (let numero = 1; numero <= 20; numero++) {
        if (numero % 2 === 0) {
            console.log("o número é par: ", numero)
        }
    }
}

//2. calcule a soma dos números de 1 a 100.
console.log("EXERCÍCIO 2")
exercicio2()
function exercicio2() {
    let soma = 0
    for (let numero = 1; numero <= 100; numero++) {
        soma += numero
    }
    console.log(soma)
}

//3. imprima a tabuada de multiplicação de um número de 1 a 10
console.log("EXERCÍCIO 3")
exercicio3()
function exercicio3() {
    let tabuada = 4
    for (let numero = 1; numero <= 10; numero++) {
        console.log(numero * tabuada)
    }
}

// 4. Imprima os número de 10 a 1 em ordem descrecente usando for.
console.log("EXERCÍCIO 4")
exercicio4()
function exercicio4() {
    for (let numero = 10; numero >= 1; numero--) {
        console.log(numero)
    }
}

//5. Imoprima os números de 1 a 100, 
//substituindo múltiplos de 3 por "Fizz", múltiplos de 5 por "Buzz" e múltiplos de ambos por "FizzBuzz"

console.log("EXERCÍCIO 5")
exercicio5()
function exercicio5() {
    for (let numero = 1; numero <= 100; numero++) {
        if (numero % 3 === 0 && numero % 5 === 0) {
            console.log("FizzBuzz");
            continue
        }
        if (numero % 3 === 0) {
            console.log("Fizz")
            continue
        }
        if (numero % 5 === 0) {
            console.log("Buzz")
            continue
        }
        console.log(numero)
    }
}

console.log("EXERCÍCIO 5 - VERSÃO 2")
exercicio5_2()
function exercicio5_2() {
    for (let numero = 1; numero <= 100; numero++) {
        let resultado = ""
        if (numero % 3 === 0) {
            resultado += "Fizz"
        }
        if (numero % 5 === 0) {
            resultado += "Buzz"
        }
        if (resultado === "") {
            resultado = numero
        }
        console.log(resultado)
    }
}

//6. calcule a média de uma lista de número utilizando o for.
console.log("EXERCÍCIO 6")
exercicio6()
function exercicio6() {
    const listaNumeros = [60, 20, 40]
    let soma = 0
    for (let posicaoArray = 0; posicaoArray < listaNumeros.length; posicaoArray++) {
        soma += listaNumeros[posicaoArray]
    }
    console.log(soma / listaNumeros.length)
}

//7. Calcule o fatorial de um número usando for
console.log("EXERCÍCIO 7")
exercicio7()
function exercicio7() {
    let fatorial = 6
    let resultado = 1
    for (let numero = 1; numero <= fatorial; numero++) {
        resultado = (resultado * numero)
    }
    console.log(resultado)
}

//8. imprima os elementos de um array utilizando for
console.log("EXERCÍCIO 8")
exercicio8()
function exercicio8() {
    let array = [1, 2, 3, 4, 5, 6]
    for (let posicaoArray = 0; posicaoArray < array.length; posicaoArray++)
        console.log(array[posicaoArray])
}

//9. Calcule a soma dos dígitos de um número utilizando o for
console.log("EXERCÍCIO 9")
exercicio9()
function exercicio9() {


}

//10. Imprima os números primos de 1 a 50 utilizando o for.
console.log("EXERCÍCIO 10")
exercicio10()
function exercicio10() {
console.log (`o número 1 é primo`)
    for (let numero = 2; numero <= 50; numero++) {
        let primo = 0
        for (let contador = 1; contador <= numero; contador++) {
            if (numero % contador === 0) {
                primo++
            }
        }
        if (primo == 2) {
            console.log(`o número ${numero} é primo`)
        }
    }
}
