var diaSemana = 4
switch (diaSemana) {
    case 1:
        console.log("domingo")
        break
    case 2:
        console.log("segunda-feira")
        break
    case 3:
        console.log("terça-feira")
        break
    case 4:
        console.log("quarta-feira")
        break
    case 5:
        console.log("quinta-feira")
        break
    case 6:
        console.log("sexta-feira")
        break
    case 7:
        console.log("sábado")
        break
    default:
        console.log("dia inválido")
}


var diaMes = 7
switch (diaMes) {
    case 1:
        console.log("Janeiro")
        break
    case 2:
        console.log("Fevereiro")
        break
    case 3:
        console.log("Março")
        break
    case 4:
        console.log("Abril")
        break
    case 5:
        console.log("Maio")
        break
    case 6:
        console.log("Junho")
        break
    case 7:
        console.log("Julho")
        break
    case 8:
        console.log("Agosto")
        break
    case 9:
        console.log("Setembro")
        break
    case 10:
        console.log("Outubro")
        break
    case 11:
        console.log("Novembro")
        break
    case 12:
        console.log("Dezembro")
        break
    default:
        console.log("Mês inválido")
}

let estadoCivil = "solteiro"
switch (estadoCivil) {
    case ("solteiro"):
        console.log("Você é Solteiro!")
        break
    case ("casado"):
        console.log("Você é Casado!")
        break
    case ("Divorciado"):
        console.log("Você é Divorciado!")
        break
    default:
        console.log("Outro")
}

let animal = ("cachorro")
switch (animal) {
    case ("cachorro"):
        console.log("Au-Au!")
        break
    case ("gato"):
        console.log("Miau!")
        break
    case (passaro):
        console.log("Piu!")
        break
    default:
        console.log("Outro")
}

let num1 = 7
let num2 = 9
let operacao = ("soma")

switch (operacao) {
    case ("soma"):
        var soma = (num1 + num2)
        console.log(`a soma entre ${num1} e ${num2} é: ${soma}`);
        break
    case ("subtração"):
        console.log(num1 - num2)
        break
    case ("divisão"):
        console.log(num1 / num2)
        break
    case ("multiplicação)"):
        console.log(num1 * num2)
        break
    default:
        console.log("operação inválida")
}





