//Considere o array [3, 7, 9, 1, 0].
//O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.
//Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de 
//operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las 
//completamente utilizando o array mencionado?

console.log("LISTA") 
lista()
function lista() {
    let lista = [3, 7, 9, 1, 0];
    lista.shift(0);
    console.log(lista)
    lista.shift(1);
    console.log(lista)
    lista.shift(2);
    console.log(lista)
    lista.shift(3);
    console.log(lista)
    lista.shift(4);
    console.log(lista)
}


console.log("FILA")
fila()
function fila() {
    let fila = [3, 7, 9, 1, 0];
       
    fila.splice(4) 
    console.log(fila)
    fila.splice(3) 
    console.log(fila)
    fila.splice(4) 
    console.log(fila)
    fila.splice(3) 
    console.log(fila)
    fila.splice(2) 
    console.log(fila)
    fila.splice(1) 
    console.log(fila)
    fila.splice(0) 
    console.log(fila)
   }

console.log("PILHA")
pilha()
function pilha(){
let pilha = [3, 7, 9, 1, 0];
pilha.pop(0);
console.log(pilha);
pilha.pop(1);
console.log(pilha);
pilha.pop(2);
console.log(pilha);
pilha.pop(3);
console.log(pilha);
pilha.pop(4);
console.log(pilha);
}
