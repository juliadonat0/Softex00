let minhaConta = {
    agencia: 3698,
    conta: 25871,
    saldo: 100000,
    tipoConta: "poupanca"
}


//Quesito 1
function extratoConta() {
    console.log(`Saldo: R$ ${minhaConta.saldo}`)
}

//Quesito 2
function saque(valor) {
    minhaConta.saldo -= valor
    return minhaConta.saldo
}


//Quesito 3
deposito = (valor) => {
    minhaConta.saldo += valor
    return minhaConta.saldo;
}





extratoConta()
console.log(saque(5600))
console.log(deposito(2500))
extratoConta()