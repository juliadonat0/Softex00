//Crie uma lista encadeada em que cada elemento representa uma pessoa.
//Ela precisa conter informações como nome, idade e referência ao filho dela.

function No(valor) {
    this.valor = valor;
    this.proximo = null;
  }
  
  function inserirInicio(lista, valor) {
    var novo = new No(valor);
    if (novo) {
      novo.proximo = lista;
      lista = novo;
    } else {
      console.log("Erro");
    }
    return lista;
  }



  
  
  function imprimirLista(lista) {
    var aux = lista;
    while (aux !== null) {
      console.log(aux.valor + " |");
      aux = aux.proximo;
    }
  }
  
  var Lista = null;
  Lista = inserirInicio(Lista, 'Xuxa, 60 anos, Mãe');
  Lista = inserirInicio(Lista, 'Angélica, 42 anos, Filha');
  Lista = inserirInicio(Lista,'Eliana, 40 anos, Filha');
  imprimirLista(Lista);