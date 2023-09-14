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
