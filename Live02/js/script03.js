var placa = document.getElementById("placa");
var btn = document.getElementById("verifica");

btn.onclick = function () {
  var ult = placa.value.substring(6, 7);
  console.log(ult);
  switch (ult) {
    case "1":
      alert("Este veiculo não pode rodar na segunda-feira");
      break;
    case "2":
      alert("Este veiculo não pode rodar na segunda-feira");
      break;
    case "3":
      alert("Este veiculo não pode rodar na terça-feira");
      break;
    case "4":
      alert("Este veiculo não pode rodar na terça-feira");
      break;
    case "5":
      alert("Este veiculo não pode rodar na quarta-feira");
      break;
    case "6":
      alert("Este veiculo não pode rodar na quarta-feira");
    case "7":
      alert("Este veiculo não pode rodar na quinta-feira");
      break;
    case "8":
      alert("Este veiculo não pode rodar na quinta-feira");
      break;
    case "9":
      alert("Este veiculo não pode rodar na sexta-feira");
      break;
    case "0":
      alert("Este veiculo não pode rodar na sexta-feira");
      break;
    default:
      alert("Este final de placa não existe");
      break;
  }
};
