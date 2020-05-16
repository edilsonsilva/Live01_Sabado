function soma(n1, n2) {
  console.log(n1 + n2);
}

function somaGeral(numeros) {
  var rs = 0;
  for (x = 0; x < numeros.length; x++) {
    rs += numeros[x];
  }
  return rs;
}
document.getElementById("btn").onclick = function () {
  var valores = [10, 13, 20];
  console.log(somaGeral(valores));
};
var rs = function (a, b) {
  return a / b;
};
console.log(rs(10, 40));

console.log("Abaixo um exemplo de função Arrow");
var par = (dv, ds) => {
  if (dv % ds == 0) {
    return "Par";
  } else {
    return "Impar";
  }
};
console.log(par(53, 2));
console.log("Função interna");
function somaQuadrado(a, b) {
  function quadrado(x) {
    return x * x;
  }
  return quadrado(a) + quadrado(b);
}
console.log(somaQuadrado(5, 4));

console.log("Abaixo a função recursiva");
function somaR(n) {
  if (n > 0) return " - Imprimindo " + n + somaR(n - 1);
  else return "Chegou a o fim " + 0;
}
console.log(somaR(10));

console.log("função de chamada imediata");
(function texto(n) {
  console.log(n);
})("Martha Araujo");

function novo() {
  console.log("hoje");
}
function novo2() {
  return 55;
}
