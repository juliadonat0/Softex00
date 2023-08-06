//1. imprima os número de 1 a 10
exercicio1()
function exercicio1() {

    let numero = 1

    do {
        console.log(numero++)
    } while (numero <= 10)
}

//2. calcule a soma dos números de 1 a 100
exercicio2()
function exercicio2() {

    let num = 1
    let soma = 0

    do {
        soma += num
        num++
    } while (num <= 100)
    console.log(soma)

    //3. Conte e imprima a quantidade de números pares de 1 a 50
    exercicio3()
    function exercicio3() {
        var num = 1;
        var par = 0

        do {
            var resto = num % 2;
            if (resto == 0) {
                par++
            }
            num++

        } while (num <= 50)

        console.log("a quantidade de números pares é: ", par)
    }

    // 4 Multiplique um número por 2 até o resultado ser maior que 1000
    // tentativa... tem que colocar num valor no resultado para rodar o "programa". 
    //Não precisa mostrar resposta.
    exercicio4()
    function exercicio4() {
        var resultado = 1000

        do {
            resultado = resultado * 2
        } while (resultado <= 1000)

        console.log("O número final foi: ", resultado)
    }


    // 5. Verifique se um número é primo

    exercicio5()
    function exercicio5() {
        var x = 3
        var cont = 1
        var primo = 0

        do {
            if (x % cont == 0) {
                primo++
            }
            cont++

        } while (cont <= x)
        if (primo == 2) {
            console.log(`O número ${x} é primo`)
        } else {
            console.log(`O número ${x} não é primo`)
        }
    }

    // 6. Faça o usuário digitar sua senha até que seja digitada a senha correta.
    exercicio6()
    function exercicio6() {

        const readline = require("readline-sync");
        var senhaUser = readline.question("Digite sua senha: ");
        const SENHA = "C@sa"

        do {
            if (senhaUser == SENHA) {
                break
            }
            senhaUser = readline.question("Senha incorreta. Digite novamente!! ");

        } while (senhaUser != SENHA)
        console.log(`A senha ${senhaUser} está correta!!`)

    }

    // 7. Imprima os múltiplos de 3 de 1 a 30.
    exercicio7()
    function exercicio7() {

        let numero = 1
        
        do {
            let resultado = (numero * 3)
            console.log(resultado)
            resultado++
        }
        while (numero >= 30)
       
    }
    
}
