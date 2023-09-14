//QUESTÃO 01
// Criação de Classe: Como você define uma classe chamada Carro em JavaScript?
console.log("QUESTÃO 01")
const carro1 = {
    modelo: "gol",
    ano: 2022,
};

console.log(`Modelo: ${carro1.modelo}`);
console.log(`Ano: ${carro1.ano}`)
console.log("-------------------")

//QUESTÃO 02
// Criação de Método: Como você adiciona um método chamado ligar à classe Carro que exibe "O carro está ligado." quando chamado?
console.log("QUESTÃO 02")
const carro2 = {
    modelo: "fusca",
    ano: 1970,

    ligar: function () {
        console.log("O carro está ligado!");
    }
}
carro2.ligar()
console.log("-------------------")



//QUESTÃO 03
// Criação de Propriedade: Como você adiciona uma propriedade chamada marca à classe Carro?

console.log("QUESTÃO 03")
const carro3 = {
    modelo: "Punto",
    ano: 2017,
};





// Método Getter e Setter: Crie um método getVelocidade que retorne a velocidade atual do carro e um método setVelocidade que defina a velocidade do carro na classe Carro.

// Herança: Crie uma classe chamada CarroEsportivo que herde da classe Carro. Adicione um método chamado acelerar que exibe "Acelerando o carro esportivo!".

// Sobreescrita de Método: Na classe CarroEsportivo, sobrescreva o método ligar para exibir "O carro esportivo está ligado."

// Propriedade Estática: Adicione uma propriedade estática chamada totalCarros na classe Carro para rastrear o número total de carros criados.

// Instanciando Objetos: Como você cria uma instância de um carro esportivo a partir da classe CarroEsportivo?

// Chamada de Métodos: Como você chama o método acelerar em uma instância de um carro esportivo?

// Contagem de Carros: Como você acessa a propriedade estática totalCarros para saber quantos carros foram criados no total?











// Questão EXTRA: Suponha que você está desenvolvendo um sistema de gerenciamento de veículos em JavaScript. Você precisa criar classes para representar carros comuns e carros esportivos. Os carros têm propriedades como marca, modelo, ano e velocidade. Além disso, você deseja rastrear o número total de carros criados.

// a) Crie uma classe chamada Carro que tenha as propriedades marca, modelo, ano e velocidade. Implemente também um método acelerar que aumenta a velocidade em 10 unidades e um método desacelerar que diminui a velocidade em 10 unidades.

// b) Crie uma classe chamada CarroEsportivo que herde da classe Carro. Sobrescreva o método acelerar para que, ao ser chamado, aumente a velocidade em 20 unidades em vez de 10 unidades.

// c) Implemente um método estático chamado totalCarros na classe Carro para rastrear o número total de carros criados.

// d) Crie uma instância de um carro comum e uma instância de um carro esportivo. Use os métodos para acelerar e desacelerar os carros e exiba suas informações, incluindo a marca, modelo, ano e velocidade.


// e) Verifique quantos carros foram criados no total usando o método estático totalCarros da classe Carro.
