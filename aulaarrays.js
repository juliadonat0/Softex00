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