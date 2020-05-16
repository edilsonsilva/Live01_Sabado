var nomes = ["Sarah", "Bruno", "Julia", "Rafael"];
nomes.push("Heitor");
console.log("Quantidade de nomes é " + nomes.length);
console.log("Nomes dentro do array " + nomes);
console.log("O segundo nome no array é " + nomes[1]);

for (i = 0; i < nomes.length; i++) {
  console.log(i + 1 + "º nome na lista: " + nomes[i]);
}

var p = 4;
while (p >= 0) {
  console.log(nomes[p]);
  p--;
}

console.log("Exibir dados com o Do While");
console.log("");
var s = 0;
do {
  console.log(nomes[s]);
  s++;
} while (s < nomes.length);

console.log("Abaixo os nomes com forEach");
//O foreach utiliza uma estrutura de função para fazer a sua execução
//de leitura do array
nomes.forEach(function (valor, e) {
  console.log(valor + " está na posição " + e);
});

console.log("Abaixo os nomes com MAP");
nomes.map((valor, e) => {
  console.log(valor + " está na posição " + e);
});
