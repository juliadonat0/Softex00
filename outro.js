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









let  num = 12
if (num > 0){
  console.log ("POSITIVO")
} else if (num = 0){
  console.log ("ZERO")
}
  else (num <0){
console.log ("NEGATIVO")
 }


 var quantidadeRodas, pesoBruto, quantidadePessoas;


quantidadeRodas = Number(window.prompt('Qual a quantidade de rodas?'));
pesoBruto = window.prompt('Qual o peso bruto?');
quantidadePessoas = window.prompt('Qual a quantidade de pessoas?');
if (quantidadeRodas == 2 || quantidadeRodas == 3) {
  window.alert('CATEGORIA A');
} else if (quantidadeRodas == 4 && quantidadePessoas <= 8 && pesoBruto <= 3500) {
  window.alert('CATEGORIA B');
} else if (quantidadeRodas >= 4 && (pesoBruto > 3500 || pesoBruto <= 6000)) {
  window.alert('CATEGORIA C');
} else if (quantidadeRodas >= 4 && quantidadePessoas > 8) {
  window.alert('CATEGORIA D');
} else if (quantidadeRodas >= 4 && pesoBruto > 6000) {
  window.alert('CATEGORIA E');
}
