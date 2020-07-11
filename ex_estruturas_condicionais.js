var resultado = 11;
if (resultado % 2 === 0) {
  resultado = "par";
} else {
  resultado = "impar";
}
console.log(resultado);

//

var anoDeNascimento = 1981;
if (anoDeNascimento <= 1945) {
  resultado = "Geração silenciosa";
} else if (anoDeNascimento > 1945 && anoDeNascimento <= 1964) {
  resultado = "Boomers";
} else if (anoDeNascimento > 1964 && anoDeNascimento <= 1980) {
  resultado = "Geração X";
} else if (anoDeNascimento > 1980 && anoDeNascimento <= 1996) {
  resultado = "Millennials";
} else {
  resultado = "Geração Z";
}
console.log(resultado);