function inserir(char) {
  let display = document.getElementById("output")
  let textoantigo = display.innerHTML
  let textonovo = textoantigo + char
  display.innerHTML = textonovo
}

function limpar() {
  let display = document.getElementById("output");
  display.innerHTML = "";
}

function calcular() {
  let display = document.getElementById("output")
  let textoantigo = display.innerHTML
  let calculo = eval(textoantigo)
  display.innerHTML = calculo
}

