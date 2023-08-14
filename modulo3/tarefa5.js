//Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em 
//JavaScript para encontrar o valor 20.
//Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo 
//com a que for mais adequada para essa situação.

//Codifique a solução mais eficiente para buscar o número 20 no array.



// busca linear - confere elemento por elemento
// busca binária - confere por "blocos" para diminuir a quantidade de elemento, porém os elementos precisam está ordenados. EX.: de metade em metade.


const lista = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const procurarNumero = 20;

function linearSearch(lista, procurarNumero) {
    let index = -1
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == procurarNumero) {
            index = i
        }
    }
    return index
}
let indiceEncontrado = linearSearch(lista, procurarNumero)
console.log(`Busca linear - acho o elemento no index ${indiceEncontrado}`)



