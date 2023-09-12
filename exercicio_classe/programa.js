const readline = require("readline-sync");

const aluno1 = {
    matricula: 1,
    nome: "Ana Silva",
    notas: [8, 7, 6]
};

const aluno2 = {
    matricula: 2,
    nome: "Beto Costa",
    notas: [10, 5, 8]
}

const alunos = [aluno1, aluno2];

console.log("===CADASTRO DE ALUNOS===");
console.log("==========MENU==========");
console.log("0 - Sair do Sistema");
console.log("1 - Listar alunos");
console.log("2 - Cadastrar aluno");
console.log("3 - Buscar aluno");
console.log("4 - Alterar aluno");
console.log("========================");

let loop = true
while (loop) {

    let opcao = readline.questionInt("Escolha uma opção:  ");
    switch (opcao) {
        case 1:
            console.log("Listando todos os alunos");
            console.log("--------------------");

            for (const a of alunos) {
                console.log(`Nome: ${a.nome}`);
                let soma = 0
                for (let i = 0; i < a.notas.length; i++) {
                    console.log(`\t - Nota ${i + 1}: ${a.notas[i]}`)
                    soma += a.notas[i]
                }
                let media = soma / a.notas.length;
                console.log(`\t- Média: ${media.toFixed(2)}`)

            }
            break;

        case 2:
            let nomeAluno = readline.question("Digite o nome do aluno: ");
            let matriculaAluno = readline.question("Digite a matrícula do aluno: ");
            let notasAluno = [];
            for (let i = 0; i < 3; i++) {
                notasAluno[i] = readline.questionFloat(`Digite a nota ${i + 1}`)
            }
            const aluno = {
                nome: nomeAluno,
                matricula: matriculaAluno,
                notas: notasAluno
            }
            alunos.push(aluno);
            break
        case 3:
            let buscarMatricula = readline.question("Digite a matrícula que você deseja obter informação: ");
            for (const a of alunos) {
                if (buscarMatricula == a.matricula) {
                    console.log(` Matrícula: ${a.matricula}`)
                    console.log(`Nome: ${a.nome}`)
                    console.log(`Notas ${a.notas}`)
                }
            }
            break

        case 4:
            let matriculaAlterar = readline.question("Digite a matrícula que você deseja alterar: ");
            for (const m of alunos) {
                if (matriculaAlterar == m.matricula) {
                    m.nome = readline.question("Digite para qual nome você quer alterar: ");
                    console.log(` Matrícula: ${m.matricula}`)
                    console.log(`Nome: ${m.nome}`)
                    console.log(`Notas ${m.notas}`)
                }

            }
            break
        case 0:
            console.log("Saindo do sistema...");
            loop = false;
            break
        default:
            console.log("Operação Inválida")
            break
            console.log("Operação Inválida")
            break
    }















}