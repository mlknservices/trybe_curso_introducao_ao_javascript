function imprimeSaudacao(nome) {
  return "Olá, " + nome + "!";
}
console.log(imprimeSaudacao("Aline"));

//

function somaDoisElementos(elementoA, elementoB) {
  return elementoA + elementoB;
}
console.log(somaDoisElementos(10, 35));

//

function calculaIMC(altura, peso) {
  return peso / (altura * altura);
}
console.log(calculaIMC(1.98, 160));

//

function multiplicaPorDois(numeros) {
  var resultados = [];

  for (var index = 0; index < numeros.length; index++) {
    var elementoMultiplicadoPorDois = numeros[index] * 2;
    resultados.push(elementoMultiplicadoPorDois);
  }

  return resultados;
}
console.log(multiplicaPorDois([10, 13]));