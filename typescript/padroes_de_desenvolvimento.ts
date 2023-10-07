//1. Crie uma classe Pessoa com os atributos nome, idade e email.
// console.log("Exercício 1")
// exercicio1()
// function exercicio1() {
//     class Pessoa {
//         nome: string;
//         idade: number;
//         email: string;
//     }
// }


//2. Crie uma classe Aluno que herda da classe Pessoa e tenha um atributo adicional matricula.
// console.log("Exercício 2")
// exercicio2()
// function exercicio2() {
//     class Pessoa {
//         nome: string;
//         idade: number;
//         email: string;
//     }

//     class Aluno extends Pessoa {
//         matricula: number;
//     }
// }

// 3. Crie uma classe Retangulo com os atributos largura e altura e métodos para calcular
// a área e o perímetro.
console.log("Exercício 3")

class Retangulo {
    largura: number;
    altura: number;


    constructor(largura: number, altura: number) {
        this.largura = largura
        this.altura = altura
    }

    perimetroRetangulo() {
        return (this.largura + this.altura) * 2

    }

    areaRetangulo() {
        return (this.altura * this.largura)
    }
}
var objeto = new Retangulo(2, 1)



// 4. Crie uma classe Círculo com o atributo raio e métodos para calcular a área e a
// circunferência.

class Circulo {
    raio: number


    constructor(raio: number) {
        this.raio = raio
    }

    areaCirculo() {// PiR²
    }
    circunferencia() { //2PiR

    }

}

// 5. Crie uma classe ContaBancaria com os atributos saldo e numeroConta e métodos
// para depositar, sacar e verificar o saldo.
class ContaBancaria {
    saldo: number
    numeroConta: number

    constructor(saldo: number, numeroConta: number) {
        this.saldo = saldo
        this.numeroConta = numeroConta
    }


    depositar() {

    }

    sacar() {

    }

    verificarSaldo() {

    }

}