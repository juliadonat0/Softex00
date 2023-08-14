//Você deve criar três listas em JavaScript:

//1. para guardar os nomes de dez pessoas;
//2. para guardar as suas idades;
//3. para guardar as suas cores favoritas.
//Em seguida, imprima essas listas.

let pessoas = ['Ana', 'Joao', 'Paula', 'Jose', 'Maria', 'Marta', 'Mauro', 'Júlia', 'Carlos', 'Catarina'];
let idades = [36, 14, 75, 2, 25, 56, 47, 35, 28, 77];
let cores = ['roxo', 'cinza', 'vermelho', 'azul', 'branco', 'rosa', 'amarelo', 'verde', 'prata', 'dourado'];

console.log("Lista das Pessoas")
for (cont = 0; cont < pessoas.length; cont++) {
    console.log(pessoas[cont])
}

console.log("Lista das Idades: ", idades)
console.log("Lista das Cores: ", cores)


//Depois, faça algumas modificações, alterando uma cor e uma idade.
//Ao terminar, imprima novamente todas as informações das três listas.

console.log("Começando as alterações ")
idades.splice(1, 1, 9)
console.log(idades)
cores.splice(2, 1, 'rosa')
console.log(cores)