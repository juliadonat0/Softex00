// import { ListFormat } from "typescript"


// var nome: string = "Popeye"
// var quantidade: number = 75
// var salario: symbol = Symbol(1000)
// var diploma: boolean = true
// const numeros: Array<ListFormat> = [1, 2, 3];

// let ABC: Object = new Object();
// let obj: object = {
//     nome: "Julia",
//     idade: 35
// }

//toFixed(): Formata um número com uma quantidade específica de casas decimais.
toFixed()
function toFixed() {
    let numero = 982735.09838926783687367
    console.log(numero.toFixed(0))
}

//toPrecision(): Formata um número com um certo número total de dígitos significativos.
toPrecision()
function toPrecision() {
    let numero = 123.456
    console.log(numero.toPrecision(5))
}

//toString(): Converte um número em uma representação de string.
toString()
function toString() {
    var numero = new String("Oi, Pessoal!");
    console.log(numero.toString())
}

//charAt(): Retorna o caractere na posição especificada dentro da string.
charAt()
function charAt() {
    var frase = new String("Meu nome é Julia");
    console.log(frase.charAt(11)) // retorna a letra
}


//toUpperCase(): Converte todos os caracteres da string para maiúsculas.
toUpperCase()
function toUpperCase() {
    var nome = ("Julia");
    console.log(nome.toUpperCase())
}


//concat(): Concatena uma ou mais strings para formar uma nova string.
concat()
function concat() {
    let letra = ["A", "B", "C", "D", "E"]
    let numero = ["1", "2", "3", "4", "5"]
    var conjunto = letra.concat(numero);
    console.log(conjunto)
};

outro()
function outro() {
    var str1 = new String("Julia");
    var str2 = new String("Donato");
    var str3 = str1.concat(str2.toString());
    console.log("str1 + str2 : " + str3)
}

//push(): Adiciona um ou mais elementos ao final do array.
push()
function push() {
    var fruta = ["abacaxi", "banana", "maça"]
    fruta.push("azeitona")
    console.log(fruta)
}

//pop(): Remove e retorna o último elemento do array.
pop()
function pop(){
    var fruta = ["abacaxi", "banana", "maça"]
    fruta.pop()
    console.log(fruta)
}

//shift(): Remove e retorna o primeiro elemento do array.
shift()
function shift(){
    var fruta = ["abacaxi", "banana", "maça"]
    fruta.shift()
    console.log(fruta)
}

//unshift(): Adiciona um ou mais elementos no início do array.
unshift()
function unshift(){
    var fruta = ["abacaxi", "banana", "maça"]
    fruta.unshift("limão")
    console.log(fruta)
}

//join(): Converte todos os elementos do array em uma única string, separados por um delimitador.
join()
function join(){
    var elementos = ['Terra', 'Fogo', 'Água', 'Ar'];
    console.log (elementos.join('-'))
    console.log (elementos.join('*'))
    console.log (elementos.join('.'))
}
 
//slice(): Retorna uma cópia de parte do array, definida por índices de início e fim.
slice()
function slice(){
    var elementos = ['Terra', 'Fogo', 'Água', 'Ar'];
    console.log (elementos.slice(0))
    console.log (elementos.slice(1))
    console.log (elementos.slice(2))
    console.log (elementos.slice(3))
    console.log (elementos.slice(4))
    }