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


// 4. Suponha que você tenha um objeto "produto" com a propriedade "preco" definida como 50.
// Como você altera o valor dessa propriedade para 75?
console.log("EXERCICIO 4")

const produto = new Object()
produto.preco = 50

pessoa.preco = 75
console.log(pessoa.preco)

// 5. Como você remove a propriedade "email" de um objeto chamado "contato"?
console.log("EXERCICIO 5")
let contato = {
    "nome": "Zé",
    "idade": "32",
    "email": "ze@xxx.com"
}
delete contato.email
console.log(contato)


// 6. Como você adiciona uma propriedade "endereco" com o valor "Rua A, 123" a um objeto existente
// chamado "cliente"?

console.log("EXERCICIO 6")
let cliente = {
    nome: "Maria",
    idade: "32",
    email: "maria@xxx.com",
}
cliente.endereço = "Rua A, 123."
console.log(cliente)

// 7. Se você tem um objeto "empresa" com uma propriedade "departamentos", 
//como você acessa o nome do primeiro departamento?
//console.log("EXERCICIO 7")
//let empresa = {
//   departamento: ("Compra", "Estoque", "Material")
//}

//console.log(empresa.departamento[0])


// 8. Suponha que você tenha um objeto "aluno" com a propriedade "notas" contendo [85, 90, 78]. 
//Como você altera a segunda nota para 95?
console.log("EXERCICIO 8")
let aluno = {
    notas: [85, 90, 78]
}
console.log(aluno.notas.splice[1, 1])


// Se você tem um objeto "dados" com uma propriedade "valores" contendo [10, 20, 30], como você remove o segundo valor (20) desse array?

// Como você cria um objeto com as propriedades "titulo" (com o valor "Livro") e "autor" (com o valor "Maria")?
// // 