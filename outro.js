var quantidadeRodas, pesoBruto, quantidadePessoas;


quantidadeRodas = 8
pesoBruto = 7000
quantidadePessoas = 9
if (quantidadeRodas == 2 || quantidadeRodas == 3) {
 console.log('CATEGORIA A');
} else if (quantidadeRodas == 4 && quantidadePessoas <= 8 && pesoBruto <= 3500) {
 console.log('CATEGORIA B');
} else if (quantidadeRodas >= 4 && (pesoBruto > 3500 && pesoBruto <= 6000)) {
 console.log('CATEGORIA C');
} else if (quantidadeRodas >= 4 && quantidadePessoas > 8) {
 console.log('CATEGORIA D');
} else if (quantidadeRodas >= 4 && pesoBruto > 6000) {
 console.log('CATEGORIA E');
}

