var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var btn = document.getElementById("calcular");

btn.onclick = function () {
  n1 = parseFloat(n1.value);
  n2 = parseFloat(n2.value);
  n3 = parseFloat(n3.value);
  n4 = parseFloat(n4.value);

  console.log("o valor de n1: " + n1);
  console.log("o valor de n2: " + n2);
  console.log("o valor de n3: " + n3);
  console.log("o valor de n4: " + n4);

  var rs = (n1 + n2 + n3 + n4) / 4;

  if (rs >= 7) {
    alert("O aluno está aprovado");
  } else if (rs <= 4) {
    alert("O aluno está reprovado");
  } else {
    alert("O aluno está em recuperação");
  }
};
