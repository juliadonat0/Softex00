const readline = require("readline-sync");

// var nomeCompleto = readline.question

var candX = 0
var candY = 0
var candZ = 0
var branco = 0
var eleitores = 5
var nulo = 0

while(true){
    var voto = readline.question (" Qual seu voto? ")
    if(voto == 889){
        candX++
    }else if (voto == 847){
        candY++
    } else if (voto == 515){
        candZ++
    } else if (voto == 0){
        branco++
    }else {
       nulo++
    }

    var finalVotacao = readline.question (" Deseja finalizar a votação? Digite 0 para SAIR.")
    if (finalVotacao == 0){
        break
    }
}

if (candX > candY && candX > candZ){
    console. log (`O vencedor é o candidato X com ${candX} votos.`)  
}else if (candY > candX && candY > candZ){
    console. log (`O vencedor é o candidato Y com ${candY} votos.`)  
}else if (candZ > candX && candZ > candY){
    console. log (`O vencedor é o candidato Z com ${candZ} votos.`)  
}else{
    console. log ("Não houve vencedor!") 
}

console. log (`O candidato X recebeu ${candX} votos`)
console. log (`O candidato Y recebeu ${candY} votos`)
console. log (`O candidato Z recebeu ${candZ} votos`)
console. log (`O voto em branco recebeu ${branco} votos`)
console. log (`O voto nulo recebeu ${nulo} votos`)