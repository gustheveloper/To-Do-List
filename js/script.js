var board = document.getElementById('board');
var buttonAdd = document.getElementById('add');
var inputAdd = document.getElementById('novaTarefa');

if (localStorage.getItem('listaTarefas')){
 listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
}else{
listaTarefas = [];
localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
}
mostrarNaTela(listaTarefas);

buttonAdd.onclick = function() {
  let valorDigitado = inputAdd.value;
  listaTarefas.push(valorDigitado);

  let tarefa = document.createElement('div');
  tarefa.setAttribute('class', 'tarefa');

  let titulo = document.createElement('div');
  titulo.setAttribute('class', 'col-md-8');
  titulo.textContent = valorDigitado;

  let buttonCheck = document.createElement('div');
  buttonCheck.setAttribute('class', 'col-md-2');

  let check = document.createElement('input');
  check.setAttribute('type', 'checkbox');

  buttonCheck.appendChild(check);

  tarefa.appendChild(titulo);
  tarefa.appendChild(buttonCheck);

  board.appendChild(tarefa);

  localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));

}

function mostrarNaTela(listaTarefas){
  for(let item of listaTarefas){
    gerarTarefa(item);
  }
}

function gerarTarefa(valorDigitado){
  let tarefa = document.createElement('div');
  tarefa.setAttribute('class', 'tarefa');

  let titulo = document.createElement('div');
  titulo.setAttribute('class', 'col-md-8');
  titulo.textContent = valorDigitado;

  let buttonCheck = document.createElement('div');
  buttonCheck.setAttribute('class', 'col-md-2');

  let check = document.createElement('input');
  check.setAttribute('type', 'checkbox');

  buttonCheck.appendChild(check);

  tarefa.appendChild(titulo);
  tarefa.appendChild(buttonCheck);

  board.appendChild(tarefa);
}
