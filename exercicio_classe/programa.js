const readline = require("readline-sync");

const aluno1 = {
    matricula: 1,
    nome: "Ana SIlva",
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
    let soma = 0
    switch (opcao) {
        case 1:
            console.log("Listando todos os alunos");
            console.log("--------------------");
            for (const a of alunos) {

                console.log(`Nome: ${a.nome}`);
                console.log(`Nota: ${a.notas}`)
                for (let i = 0; i < a.notas.lenght; i++) {
                    console.log(`\t- Nota: ${i + 1}: ${a.notas[i]}`);
                    soma += a.notas[i];
                }
                let media = soma / a.notas.lenght;
                console.log(`\t - Média: ${media}`);
            }
            break;

            F
    }
}
        case 2:
let nomeAluno = readline.question("Digite o nome do aluno: ");
let notasAluno = [];
for (let i = 0; i < 3; i++) {
    notasAluno[i] = readline.questionFloat(`Digite a nota ${i + 1}`)
}
const aluno = {
    nome: nomeAluno,
    notas: notasAluno
}
alunos.push(aluno);
break



        case 0:
console.log("Saindo do sistema...");
loop = false;
break
        default:
console.log("Operação Inválida")
break
    }
}