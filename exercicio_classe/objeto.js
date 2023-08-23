// 1. Como você cria um objeto vazio em JavaScript?
console.log("EXERCÍCIO 1")
let objeto = {}
if (Object.values(objeto).length === 0) {
    console.log('objeto está vazio');
}

console.log("EXERCICIO 1 - OUTRA OPÇÃO")
let object = {}
function isEmptyObject(object) {

    for (var name in object) return false;
    return true;
}
if (isEmptyObject({})) {
    console.log('Object vazio');
}

// 2. Como você adiciona a propriedade "nome" com o valor "João" a um objeto chamado "pessoa"?
console.log("EXERCICIO 2")

const pessoa = {
    nome: "João"
}
console.log(pessoa.nome)

// 3. Como você acessa o valor da propriedade "idade" de um objeto chamado "usuario"?

console.log("EXERCICIO 3")

const usuario = new Object();
usuario.nome = "João";
usuario.idade = 20;

console.log(usuario.idade);


// 4. Suponha que você tenha um objeto "produto" com a propriedade "preco" definida como 50. Como você altera o valor dessa propriedade para 75?
console.log("EXERCICIO 4")

const produto = new Object()
produto.preco = 50

pessoa.preco = 75
console.log(pessoa.preco)

// Como você remove a propriedade "email" de um objeto chamado "contato"?

// Como você adiciona uma propriedade "endereco" com o valor "Rua A, 123" a um objeto existente chamado "cliente"?

// Se você tem um objeto "empresa" com uma propriedade "departamentos", como você acessa o nome do primeiro departamento?

// Suponha que você tenha um objeto "aluno" com a propriedade "notas" contendo [85, 90, 78]. Como você altera a segunda nota para 95?

// Se você tem um objeto "dados" com uma propriedade "valores" contendo [10, 20, 30], como você remove o segundo valor (20) desse array?

// Como você cria um objeto com as propriedades "titulo" (com o valor "Livro") e "autor" (com o valor "Maria")?
// // 