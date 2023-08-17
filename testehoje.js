//let numeros = [1, 2, 3, 4, 5]
//console.log(numeros[1]);
///let soma = console.log(numeros[4] + numeros[3])

//let tamanhoFixo = Array(3)
//console.log(tamanhoFixo)

//let numeros_1 = [1, 2, 3]
//let maisNumeros = [...numeros_1, 4, 5, 6]
//console.log(maisNumeros)

//let numeros = [1, 2, 3, 4, 5];
//for (let i = 0; i < numeros.length; i++) {
//  console.log(numeros[1])
//}
//console.log(numeros)

//let frutas = ['maça', 'banana', 'laranja'];
//frutas.forEach(function (fruta){
//console.log(fruta);
//});


//1.imprima de 1 a 10
exercicio1()
function exercicio1() {
  let num = 1

  while (num <= 10) {
    console.log(num);
    num++
  }
}


//2. soma dos números de 1 a 100
exercicio2()
function exercicio2() {
  let num = 1
  let soma = 0

  while (num <= 100) {
    soma += num;
    num++
  }
  console.log(soma)
}

//3. conte e imprima a quantidade de numeros pares de 1 a 50
exercicio3()
function exercicio3() {
  let num = 1
  let par = 0

  while (num <= 50) {
    var resto = num % 2;
    if (resto == 0) {
      par++
    }
    num++
  }
  console.log("A quantidade de números pares é: ", par)
}

//4. multiplique um número por 2 até o resultado ser maior que 1000.

exercicio4()
function exercicio4() {
  let resultado = 1000

  while (resultado <= 1000) {
    resultado = resultado * 2
  }
  console.log("O resultado é : ", resultado)
}

// 5. Verifique se um número é primo
exercicio5()
function exercicio5() {
  var x = 151
  var cont = 1
  var primo = 0
  while (cont <= x) {
    if (x % cont == 0) {
      primo++
    }
    cont++
  }
  if (primo == 2)
    console.log(`O número ${x} é primo`)
  if (primo != 2)
    console.log(`O número ${x} não é primo`)
}

// 7. Imprima os múltiplos de 3 de 1 a 30.
exercicio7()
function exercicio7() {
  let numero = 1

  while (numero <= 30) {
    console.log(numero * 3)
    numero++
  }
}


console.log("lista encadeada")
function listaEncadeada() {
  let head = null //cabeça
  let lenght = 0 //tamanho da lista
  const novo = (value) => {
    return {
      value,
      next: null
    }
  }
  const add = (valor) => {
    if (!head) {

    }

  }



  return {
    lenght: () => lenght
  }
}
const list = listaEncadeada()
console.log(list.lenght())





function buscaLinear(array, elementoBuscado) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === elementoBuscado) {
      return i
    }
  }
  // caso o elemento não seja encontrado, retorna -1
  return -1
}

const listaNumeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elementoProcurado = 20;

const indice = buscaLinear(listaNumeros, elementoProcurado);

if (indice !== -1) {
  console.log(`O elemento ${elementoProcurado} está no índice ${indice}`);
} else {
  console.log(`O elemento ${elementoProcurado} não está na lista.`)
}

//fatorial recursividade
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1
  } else {
    return n * fatorial(n - 1);
  }
}
const numero = 9
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`)

//fatorial
function fatorial(numero) {
  console.log(numero)
  console.log(numero == 1)
  if (numero == 1) {
    console.log(1)
    return 1
  }

  return numero * fatorial(numero - 1)
}
console.log(fatorial(4))


console.log('ERRO DE REFERÊNCIA - try ... catch')
let x;
try {
  x = y + 1;
} catch (error) {
  console.log('name', error.name)
  console.log('message', error.message)
}

console.log('ERRO DE SINTAXE - try ... catch')
try {
  eval("alert ('hello)");
} catch (error) {
  console.log('name', error.name)
  console.log('message', error.message) // erro devido a falta de ' no nome hello
}

console.log('ERRO DE TIPO - try ... catch')
let num = 1;
try {
  num.toUpperCase() //coloca a string toda maiuscula
} catch (error) {
  console.log('name', error.name)
  console.log('message', error.message) // erro pq a variavel é número e a condição é colocar em maiuscula
}


console.log('ERRO PERSONALIZADO - try ... catch')
function userException(message) {
  this.message = message;
  this.name = "userExeption"
}
try {
  let num = -6;
  if (numero < 0) {
    throw new userException('O número deve ser positivo');
  }
  console.log('ok');
} catch (error) {
  console.log('name', error.name)
  console.log('message', error.message) 
}