const readline = require("readline-sync");

const aluno1 = {
    matricula: 1,
    nome: "Ana Silva",
    notas: [8, 7, 6]
};

const aluno2 = {
    matricula: 2,
    nome: "Beto Costa",
    notas: [10, 5.5, 8]
}

const alunos = [aluno1, aluno2];

console.log("===CADASTRO DE ALUNOS===");
console.log("==========MENU==========");
console.log("0 - Sair do Sistema");
console.log("1 - Listar todos os alunos");
console.log("2 - Cadastrar todos os alunos");
console.log("3 - Buscar todos os alunos");
console.log("4 - Alterar todos os alunos");
console.log("========================");

let loop = true
while (loop) {

    let opcao = readline.questionInt("Escolha uma opção:  ");
    switch (opcao) {
        case 1:
            console.log("Listando todos os alunos");
            console.log("--------------------");
            let soma = 0
            for (const a of alunos) {
                console.log(`Nome: ${a.nome}`);
                for (let i = 0; i < a.notas.length; i++) {
                    console.log(`\t - Nota ${i + 1}: ${a.notas[i]}`)
                    soma += a.notas[i]
                }
                let media = soma / a.notas.length;
                console.log(`\t- Média: ${media.toFixed(2)}`)
            }



            break
        default:
            console.log("Operação Inválida")
            break
    }















}