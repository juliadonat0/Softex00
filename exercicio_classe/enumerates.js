// 1. Suponha que você está desenvolvendo um aplicativo de agendamento e precisa representar
// os dias da semana. Como você usaria enums para isso e qual seria o benefício?

console.log("Exercício 1")
const diasDaSemana = {
    DOMINGO: 'Domingo',
    SEGUNDA: 'Segunda-feira',
    TERCA: 'Terça-feira',
    QUARTA: 'Quarta-feira',
    QUINTA: 'Quinta-feira',
    SEXTA: 'Sexta-feira',
    SÁBADO: 'Sábado'
}

console.log(diasDaSemana.QUARTA)

// 2. Você está construindo um jogo e precisa representar os diferentes tipos de inimigos. 
//Como você usaria enums para essa situação?

console.log("Exercício 2")
const inimigos = {
    INICIAL: 'XXX',
    INTERMEDIARIO: 'YYY',
    SUPERIOR: 'ZZZ',
}

console.log(inimigos.INICIAL)


// 3. Você está criando um aplicativo de reserva de passagens aéreas e precisa representar 
//os diferentes tipos de classe (Econômica, Executiva, Primeira Classe). Como você usaria enums para isso?

console.log("Exercício 3")
const classe = {
    ECONOMICA: 'Econômica',
    EXECUTIVA: 'Executiva',
    PRIMEIRACLASSE: 'Primeira Classe',
}

console.log(classe.EXECUTIVA)

// 4. Imagine que você está desenvolvendo um aplicativo de tarefas e deseja categorizar as 
//tarefas em "Trabalho", "Estudo" e "Lazer". Como você usaria enums para esse cenário?

console.log("Exercício 4")
const tarefa = {
    TRABALHO: ' Trabalho',
    ESTUDO: 'Estudo',
    LAZER: 'Primeira Lazer',
}

console.log(tarefa.ESTUDO)


// 5. Em um aplicativo de e-commerce, você precisa definir os diferentes 
//status de um pedido: "Em processamento", "Enviado" e "Entregue". 
//Como você usaria enums para isso?
console.log("Exercício 5")
const pedido = {
    STATUS1: 'Em Processamento',
    STATUS2: 'Enviado',
    STATUS3: 'Entregue'
}
console.log(pedido.STATUS2)