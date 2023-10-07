import { arrayBuffer } from "stream/consumers"

//1. Crie uma classe Pessoa com os atributos nome, idade e email.
class Pessoa {
    nome: string
    idade: number
    email: string

    constructor(nome: string, idade: number, email: string) {
        this.nome = nome
        this.idade = idade
        this.email = email
    }
}
let pessoa = new Pessoa("ana", 54, "abc@xxx.com.br")
console.log(pessoa)
console.log("__________________")

//2. Crie uma classe Aluno que herda da classe Pessoa e tenha um atributo adicional matricula.
class Aluno extends Pessoa {
    matricula: number

    constructor(nome: string, idade: number, email: string, matricula: number) {
        super(nome, idade, email)
        this.matricula = matricula;

    }
}
let aluno1 = new Aluno("ana", 54, "abc@xxx.com.br", 858745)
console.log(aluno1)
console.log("__________________")

//3. Crie uma classe Retangulo com os atributos largura e altura e métodos para calcular a área e o perímetro.

class Retangulo {
    largura: number
    altura: number

    constructor(largura: number, altura: number) {
        this.largura = largura
        this.altura = altura
    }

    area(): number {
        return this.largura * this.altura;
    }

    perimetro(): number {
        return (this.largura + this.altura) * 2
    }
}
var retangulo = new Retangulo(2, 2)
console.log(retangulo.area())
console.log(retangulo.perimetro())


// 4. Crie uma classe Círculo com o atributo raio e métodos para calcular a área e a circunferência.
class Circulo {
    raio: number
    pi: number = 3.14

    constructor(raio: number) {
        this.raio = raio
    }

    areaCirculo() {
        return this.pi * (this.raio ** 2)

    }
    circunferencia() {
        return 2 * (this.pi * this.raio)
    }

}
var circulo = new Circulo(5)
console.log(circulo.areaCirculo())
console.log(circulo.circunferencia())

// 5. Crie uma classe ContaBancaria com os atributos saldo e numeroConta e métodos para depositar, sacar e verificar o saldo.
// class ContaBancaria {
//     numeroConta: number
//     saldo: number

//     constructor(numeroConta: number, saldo: number) {
//         this.numeroConta = numeroConta
//         this.saldo = saldo
//     }

//     depositar(deposito: number) {
//         if (deposito <= 0) {
//             throw `Operação de Depósito Inválida: R$ ${deposito}`
//         }

//         this.saldo += deposito
//         return (`A conta número ${this.numeroConta}, recebeu um depósito de ${deposito} e tem de saldo R$ ${this.saldo}`)
//     }
//     verificarSaldo() {
//         return (`A conta número ${this.numeroConta} tem de saldo R$ ${this.saldo}`)

//     }
//     sacar(saque: number) {
//         if (saque <= 0 || saque > this.saldo) {
//             throw `Operação de Saque Inválida: R$ ${saque}`
//         }
//         this.saldo -= saque
//         return (`A conta número ${this.numeroConta}, realizou um saque de ${saque} e tem de saldo R$ ${this.saldo}`)

//     }
// }

// var minhaConta = new ContaBancaria(123, 50000)
// console.log(minhaConta.verificarSaldo())
// console.log(minhaConta.depositar(250))
// //console.log(minhaConta.depositar(0))   //com valor zero ele apresenta o throw e para de rodar o código.
// console.log(minhaConta.sacar(45000))
// console.log(minhaConta.sacar(6000))


// 6. Crie uma classe Produto com os atributos nome, preco e quantidade e métodos para calcular o valor total (preço * quantidade).
class Produto {
    nome: string
    preco: number
    quantidade: number

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    valorTotal() {
        return (`O produto ${this.nome} terá o valor final de ${(this.preco * this.quantidade)}`)
    }
}
var valorProduto = new Produto("Sandália", 40, 5)
console.log(valorProduto.valorTotal())

// 7.	Crie uma classe Triangulo com os atributos lado1, lado2 e lado3 e um método para verificar se é um triângulo válido.
class Triangulo {
    lado1: number
    lado2: number
    lado3: number

    constructor(lado1: number, lado2: number, lado3: number) {
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }

    validade() {
        if (this.isTrianguloValido(this.lado1, this.lado2, this.lado3)
            || this.isTrianguloValido(this.lado2, this.lado1, this.lado3)
            || this.isTrianguloValido(this.lado3, this.lado1, this.lado2)) {

            return (`É um triângulo!`)
        }
        return (`Não é um triângulo!`)
    }

    isTrianguloValido(posicao1: number, posicao2: number, posicao3: number) {
        if (posicao1 > (posicao2 - posicao3) && posicao1 < (posicao2 + posicao3)) {
            return true
        }
        return false
    }

    validade_outra_opcao() {
        if (this.lado1 > (this.lado2 - this.lado3) && this.lado1 < (this.lado2 + this.lado3)) {
            return (`É um triângulo!`)
        }
        else if (this.lado2 > (this.lado1 - this.lado3) && this.lado2 < (this.lado1 + this.lado3)) {
            return (`É um triângulo!`)
        }
        else if (this.lado3 > (this.lado1 - this.lado2) && this.lado3 < (this.lado1 + this.lado2)) {
            return (`É um triângulo!`)
        }
        else
            return (`Não é um triângulo!`)
    }
}
var triangulo = new Triangulo(2, 2, 2)
console.log(triangulo.validade())
console.log(triangulo.validade_outra_opcao())

// 8. Crie uma classe Livro com os atributos titulo, autor e anoPublicacao e um método para exibir informações do livro.
class Livro {
    titulo: string
    autor: string
    anoPublicacao: number

    constructor(titulo: string, autor: string, anoPublicacao: number) {
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }
    informacaoLivro() {
        return (`O livro é: ${this.titulo}. Autor: ${this.autor}. Ano de publicação: ${this.anoPublicacao}`)
    }
}
var livro = new Livro("Nárnia", "C.S. Lewis", 2015)
console.log(livro.informacaoLivro())

// 9.	Crie uma classe Agenda que permite adicionar, listar e remover contatos (nomes e números de telefone).

class Agenda {
    listaContatos: Contato[] = new Array()

    adicionarContato(contato: Contato) {
        this.listaContatos.push(contato)
    }

    listarContatos() {
        return this.listaContatos
    }

    removerContato(contato: Contato) {
        for (var i = 0; i <= this.listaContatos.length; i++) {
            if (contato.nome == this.listaContatos[i].nome && contato.numeroTelefone == this.listaContatos[i].numeroTelefone) {
                this.listaContatos.splice(i)
            }
        }
    }
}


class Contato {
    nome: string
    numeroTelefone: number

    constructor(nome: string, numeroTelefone: number) {
        this.nome = nome
        this.numeroTelefone = numeroTelefone
    }
}

var agenda = new Agenda()
var contato1 = new Contato("Ana", 12345)

agenda.adicionarContato(new Contato("hsgfdh", 415687445))
agenda.adicionarContato(contato1)
console.log(agenda.listarContatos())
agenda.removerContato(contato1)
console.log(agenda.listarContatos())


// 10.	Crie uma classe CarroEsportivo que herda da classe Carro (usada no exemplo anterior) e tenha métodos adicionais para acelerar rapidamente e produzir um som esportivo.
class Carro {
    modelo: string;
    marca: string;
    cor: string;
    numeroRodas: number;

    constructor(modelo: string, marca: string, cor: string, numeroRodas: number) {
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.numeroRodas = numeroRodas
    }
}
class CarroEsportivo extends Carro {

    constructor(modelo: string, marca: string, cor: string, numeroRodas: number) {
        super(modelo, marca, cor, numeroRodas)
    }

    acelerar(){
        return (`O carro acelerou`)
    }

    produzirSom(){
        return (`Vrum...Vruum...`)
    }
}
var carroEsportivo = new CarroEsportivo("Uno", "Fiat", "azul",4)
console.log  (carroEsportivo.acelerar())
console.log  (carroEsportivo.produzirSom())