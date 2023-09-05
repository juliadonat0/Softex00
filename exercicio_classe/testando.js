// try {
//     console.log("iniciando calculadora...");
//     let input = 0;
//     if (input === 0) {
//         throw "valor negado";
//     }
//     let result = 5 / input;
// } catch (erro) {
//     console.log("[Erro:] Divisão por erro não permitida")
// } finally {
//     console.log("finalizando calculadora...\n")
// }




// console.log("EXERCÍCIO 1 - TRY...CATCH") // Em javascript a divisão por zero não retorna um erro. Retorna infiniy 

//     try {
//         if (divisor === 0) {
//             throw "Valor negado"
//         }
//         let result = 90 / divisor;
//     } catch (erro) {
//         console.log(" Erro: Divisão por zero no console")
//     }

// //HEITOR
//     console.log("EXERCÍCIO 1 - TRY...CATCH") // Em javascript a divisão por zero não retorna um erro. Retorna infiniy 
// console.log(divisao(10, 0))
// function divisao(dividendo, divisor) {
//     try {
//         return dividendo / divisor
//     } catch (erro) {
//         console.log(" Erro: Divisão por zero no console")
//     }
// }

const readline = require("readline-sync");

const aluno1 = {
    nome: "Ana",
    notas: [8, 7, 6]
};
const aluno2 = {
    nome: "Beto",
    notas: [10, 5.5, 8]
}

const alunos = [aluno1, aluno2];

console.log("===CADASTRO DE ALUNOS===");
console.log("==========MENU==========");
console.log("0 - Sair do Sistema");
console.log("1 - Listar todos os alunos");

let loop = true
while (loop) {

    let opcao = readline.questionInt("Escolha uma opção:  ");
    switch (opcao) {
        case 1:
            console.log("Listando todos os alunos");
            console.log("--------------------");

            for (const a of alunos) {
                console.log(`Nome: ${a.nome}`);
                for (let i = 0; i < a.notas.lenght; i++) {
                    console.log(`\t- Nota ${i + 1}: ${a.notas[i]}`);
                    soma += a.notas[i];
                }
                let media = a.notas.lenght/3
                console.log(`Media: ${media}`)
            }

            break;

        case 0:
            console.log("Saindo do sistema...")
            break


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

        default:
            console.log("Operação Inválida")
            break
    }
}