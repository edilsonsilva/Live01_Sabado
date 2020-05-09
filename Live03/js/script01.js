//referenciar o botão da página html
var btnPF = document.getElementById("primeirofor");

btnPF.onclick = function () {
  var valor = prompt("Digite um valor para a tabuda");

  for (var contar = 1; contar <= 10; contar++) {
    console.log(valor + " x " + contar + " = " + valor * contar);
  }
};

//fazer referência para o botão fotos
var ft = document.getElementById("fotos");

ft.onclick = function () {
  for (var i = 1; i <= 3; i++) {
    document.getElementById("miniatura").innerHTML +=
      "<img src=img/foto" +
      i +
      ".jpg id=foto" +
      i +
      " onclick=abrirFoto(" +
      i +
      ")>";
  }
};

/*var ft1 = document.getElementById("foto1");
var ft2 = document.getElementById("foto2");
var ft3 = document.getElementById("foto3");

ft1.onclick = function () {
  document.getElementById("maior").innerHTML = "<img src=img/foto1.jpg>";
};*/

function abrirFoto(x) {
  document.getElementById("maior").innerHTML =
    "<img src=img/foto" + x + ".jpg>";
}
