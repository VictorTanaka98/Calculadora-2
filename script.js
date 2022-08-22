const result = document.querySelector('.result');
const confirmar = document.querySelector('.igual');

function insert(valor) {
  result.innerHTML += valor
}


function clean() {
  result.innerHTML =''
}


function voltar() {
  if(result.textContent) {
    let resultado = document.getElementById('result').innerHTML
    result.innerHTML = resultado.substring(0, resultado.length -1)
  } 
}


function confirma() {
  if (result.textContent != "Erro") {
    document.getElementById("result").innerHTML = eval(result.innerHTML)
  }
}



