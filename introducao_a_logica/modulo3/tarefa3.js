//Considere o array [3, 7, 9, 1, 0].
//O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.
//Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de 
//operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las 
//completamente utilizando o array mencionado?

console.log("FILA") //Remova um elemento da frente de um array, usando o método shift(). Essa ação é o mesmo que a operação de desenfileiramento, ou seja, o primeiro é atendido e sai da fila.
fila()
function fila() {
    let fila = [3, 7, 9, 1, 0];
    for (contador = 0; contador <= fila.length + 1; contador++) {
        fila.shift();
        console.log(fila);
    }
}

console.log("LISTA")
lista()
function lista() {
    let lista = [3, 7, 9, 1, 0];

    for (contador = lista.length; contador >= 0; contador--) {
        lista.splice(contador);
        console.log(lista);
    }
}


console.log("PILHA") //O método pop()remove o elemento final do array e retorna o elemento para os chamados. Se o array estiver vazio, o método retornará undefined.
pilha()
function pilha() {
    let pilha = [3, 7, 9, 1, 0];

    for (let contador = 0; contador <= pilha.length + 1; contador++) {
        pilha.pop()
        console.log(pilha);
    }
}