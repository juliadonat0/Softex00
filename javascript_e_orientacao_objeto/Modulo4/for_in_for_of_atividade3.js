const pessoa1 = [
    {
        Nome: "Alice",
        Idade: 18,
        Profissao: "enfermeira",
        Cidade: "Recife"
    }
];

const pessoa2 = [
    {
        Nome: "Bruno",
        Idade: 47,
        Profissao: "medico",
        Cidade: "Jaboatão"
    }
];

const pessoas = [pessoa1, pessoa2];

console.log (`FOR..IN`)

for (let i in pessoas) {
    console.log(pessoas[i])
}

console.log (`FOR..OF`)
for (let p of pessoas) {
    console.log(`Nome: ${pessoa1}`)
   
}