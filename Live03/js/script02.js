/*1 - soma
2 - subtracao
3 - multiplicacao
4 - divisao
9 - sair
*/
var btn = document.getElementById("btnW");

btn.onclick = function () {
  var opcao = prompt(
    "Digite um dos número abaixo para executar:" +
      "\n1-Soma\n2-Subtrair\n3-Multiplicar\n4-Dividir\n9-Sair"
  );

  while (opcao != 9) {
    if (opcao < 1 || opcao > 9) {
      alert("Opção digitada não existe");
      break; //sair da estrutura while
    }
    if (opcao > 4 && opcao < 9) {
      alert("Opção digitada não existe");
      break;
    }

    var n1 = prompt("digite um valor");
    var n2 = prompt("digite outro valor");

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    if (opcao == 1) alert(n1 + n2);
    else if (opcao == 2) alert(n1 - n2);
    else if (opcao == 3) alert(n1 * n2);
    else if (opcao == 4) alert(n1 / n2);
    else alert("Opção digitada não existe");

    opcao = prompt(
      "Digite um dos número abaixo para executar:" +
        "\n1-Soma\n2-Subtrair\n3-Multiplicar\n4-Dividir\n9-Sair"
    );
  }
};
