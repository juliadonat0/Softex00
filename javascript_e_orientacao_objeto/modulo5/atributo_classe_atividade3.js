/*
Criação dos objetos abstratos: OBJETO e OBJETO LUMINOSO e dos objetos materiais que estendem dele:  TV  e pisca-pisca.
Como atributo comum entre eles: marca, tipo e tamanho, isLigado que já inicia falso. 
Como atributo específico criado para tv: canal 
Como atributo específico criado para pisca-pisca: cor 

Métodos comuns entre eles: ligar e desligar
Métodos específicos para tv: alterarCanal
Métodos específicos para pisca-pisca: alterarCor
*/

//ABSTRATO

class Objeto {
    constructor(marca, tipo, tamanho) {
        this.marca = marca;
        this.tipo = tipo;
        this.tamanho = tamanho;
    }
}

class ObjetoLuminoso extends Objeto {
    constructor(marca, tipo, tamanho) {
        super(marca, tipo, tamanho)
        this.isLigado = false;

    }
    ligar() {
        this.isLigado = true;
        console.log("Está ligado!");
    }

    desligar() {
        this.isLigado = false;
        console.log("Está desligado!");
    }
}



//MATERIAL
class Tv extends ObjetoLuminoso {
    constructor(marca, tipo, tamanho, canal) {
        super(marca, tipo, tamanho)
        this.canal = canal
    }

    alterarCanal(canal) {
        this.canal = canal;
        console.log(`Alterar canal para: ${canal}`);
    };
}

class PiscaPisca extends ObjetoLuminoso {
    constructor(marca, tipo, tamanho, cor) {
        super(marca, tipo, tamanho)
        this.cor = cor;
    }

    alterarCor(cor) {
        this.cor = cor;
        console.log(`Pisca-pisca com a cor: ${cor}`);
    }
}

let tv = new Tv("Sony", "LCD", 42, "Globo");
tv.ligar();
tv.alterarCanal("Band");
tv.desligar();

let piscaPisca = new PiscaPisca("Real", "parede", 2, "colorido");
piscaPisca.ligar();
piscaPisca.alterarCor("azul");
piscaPisca.desligar();