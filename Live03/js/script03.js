var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.onclick = function () {
  var x = 20;

  while (x < 10) {
    console.log(x);
    x++;
  }
};
btn2.onclick = function () {
  var x = 20;
  do {
    console.log(x);
    x++;
  } while (x < 10);
};
