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
class ContaBancaria {
    numeroConta: number
    saldo: number

    constructor(numeroConta: number, saldo: number) {
        this.numeroConta = numeroConta
        this.saldo = saldo
    }

    depositar(deposito: number) {
       if (deposito <=0){
        throw `Operação de Depósito Inválida: R$ ${deposito}`
       }
        
        this.saldo += deposito
        return (`A conta número ${this.numeroConta}, recebeu um depósito de ${deposito} e tem de saldo R$ ${this.saldo}`)
    }
    verificarSaldo() {
        return (`A conta número ${this.numeroConta} tem de saldo R$ ${this.saldo}`)

    }
    sacar(saque: number) {
        if (saque <= 0 || saque > this.saldo) {
            throw `Operação de Saque Inválida: R$ ${saque}`
        }
        this.saldo -= saque
        return (`A conta número ${this.numeroConta}, realizou um saque de ${saque} e tem de saldo R$ ${this.saldo}`)

    }
}

var minhaConta = new ContaBancaria(123, 50000)
console.log(minhaConta.verificarSaldo())
console.log(minhaConta.depositar(250))
//console.log(minhaConta.depositar(0))   //com valor zero ele apresenta o throw e para de rodar o código.
console.log(minhaConta.sacar(45000))
console.log(minhaConta.sacar(6000))