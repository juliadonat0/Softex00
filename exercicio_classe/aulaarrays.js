// 1. Dado o array abaixo, acesse o segundo elemento e armazene-o 
//em uma varíavel chamada "segundoElemento". Const meuArray = [10,20,30,40,50]

const meuArray = ["10", "20", "30", "40", "50"]
console.log(meuArray[1])

let segundoElemento = (meuArray[1])
console.log(segundoElemento)

//2. Calcule e exiba o tamanho do seguinte array:
// const frutas = ['maca', 'banana', 'laranja', 'uva', 'manga']

const frutas = ["maca", "banana", "laranja", "uva", "manga"]
console.log(frutas.length)

//3. Adicione o elemento "pera" ao final do array de frutas no exercício anterior

frutas.push("pera")
console.log(frutas)

//4. Remova o primeiro elemento do array de frutas do exercício anterior.
frutas.shift()
console.log(frutas)

//5. Dado o array abaixo, verifique se o número 25 está presente e exiba uma mensagem indicando 
// se ele foi encontrado ou não. Const numeros = [10, 20, 30, 40, 50]
const numeros = ["10", "20", "30", "40", "50"]

console.log(numeros.includes(25))

//6. Crie dois arrays com números de 1 a 5 cada e, em seguida, concatene-os em um novo array.

let num1 = ["1", "2", "3", "4", "5"]
let num2 = ["1", "2", "3", "4", "5"]
var num3 = num1.concat(num2);
console.log(num3)

//7. Dado o array de números abaixo, crie um novo array contendo apenas os número pares.
console.log("exercicio 7")
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros1.filter(x => x % 2 === 0));



//8. Ordene o seguinte array de números em ordem crescente{
console.log("exercicio 8")
const numx = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
numx.sort();
console.log(numx)

//9. Dado o array de frutas abaixo, encontre o índice em que a fruta "laranja" está localizada.
console.log("exercicio 9")
const fruta = ["maça", "banana", "laranja", "uva", "manga"];
console.log(fruta.indexOf("laranja"))

//10. Crie uma função que receba um parâmetro e verifique se é um array ou não. 
//A função deve retornar true se for um array e false caso contrário.
console.log("exercicio 10")
var doces = ["coco", "goiaba", "jaca"]
function eUmArray(array) {
    if (typeof array == 'arra') {
        return true
    } else {
        return false
    }
}
console.log(` A variável doces é um array? ${eUmArray(10)}`);