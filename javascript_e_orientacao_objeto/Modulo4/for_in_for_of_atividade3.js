class Pessoa {
    constructor(nome, idade, profissao, cidade) {
      this.nome = nome;
      this.idade = idade;
      this.profissao = profissao;
      this.cidade = cidade
    }  
  }

const pessoa1 = new Pessoa("Alice", 18, "enfermeira", "Recife")
const pessoa2 = new Pessoa("Bruno", 47, "medico", "Jaboatão")
const pessoa3 = new Pessoa("Maria", 78, "baba", "Fortaleza")
const pessoa4 = new Pessoa("Manoel", 36, "gari", "Salvador")

const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4];

console.log (`FOR..IN`)

for (let i in pessoas) {
    console.log(pessoas[i])
}

console.log (`FOR..OF`)
for (let p of pessoas) {
    console.log(`
    Nome: ${p.nome}
    Idade: ${p.idade}
    Profissão: ${p.profissao}
    Cidade: ${p.cidade}
    `)
}
