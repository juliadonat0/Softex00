// Pelo material do JoyClass foi impossível responder a questão.
// Resolvi de acordo com os estudos paralelos.

let minhaConta = {
    agencia: 3698,
    conta: 25871,
    saldo: 100000,
    tipoConta: "poupanca",


    saldoAtual: function () {
        console.log(`Seu saldo atual é : R$ ${this.saldo}`)
    },

    deposito: function (valorADepositar) {
        this.saldo += valorADepositar
    },

    saque: function (valorARetirar) {
        this.saldo -= valorARetirar
    },

    extratoConta: function () {
        console.log("Extrato Bancário")
        console.log("--------------------")
        console.log(`Agência: ${this.agencia}`)
        console.log(`Conta: ${this.conta}`)
        console.log(`Tipo de Conta: ${this.tipoConta}`)
        console.log(`Saldo: ${this.saldo}`)
        console.log("--------------------")
    }
}

// fim do prorama. A partir de agora começarão os testes.

minhaConta.saldoAtual() // item 1 do exercício
minhaConta.deposito(750) // item 2 do exercício
minhaConta.saque(50000) // item 3 do exercício
minhaConta.extratoConta() //item 4 conta mostrada no Extrato

