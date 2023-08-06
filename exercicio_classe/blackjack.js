var carta1 = 10
var carta2 = 9
var banco1 = 5
var banco2 = 3
var banco3 = 8
var banco4 = 1
var soma = (carta1+carta2)
var somaBanco = (banco1+banco2+banco3+banco4)


if (somaBanco > 21 || soma <= 21 && soma > somaBanco){
    console.log (soma>=21 ,  "JOGADOR GANHOU")
}
    else if (somaBanco == 21 && soma < 21) {
        console.log ("BANCO GANHOU")
}
    else if (soma == 21 && somaBanco == 21) {
        console.log ("EMPATE")
}
