var corTitulo;
var botaoAdm;
var botaoGep;
var botaoMkt;
var botaoPjt;
var botaoPres;
var botaoCom;
var Card;
var ColunaCard;

function criarNova(){
  // Criar um novo botão para representar a tarefa
  var newTask = document.createElement("button");
  newTask.className = "item";
  newTask.draggable = "true";
  newTask.draggable = true;
  newTask.setAttribute('onclick', 'containerCard(this)');

  // Adicionar o parágrafo com o nome da tarefa
  var taskText = document.createElement("p");
  taskText.className = "tasktext";
  taskText.textContent = "Escreva o nome da tarefa";

  // Adicionar o círculo com a cor escolhida
  var taskCircle = document.createElement("div");
  taskCircle.className = "taskCircle";
  taskCircle.style.backgroundColor = "rgb(73, 87, 102)";

  // Adicionar o parágrafo e o círculo à nova div
  newTask.appendChild(taskText);
  newTask.appendChild(taskCircle);
  newTask.style.display = "none";

  // Adicionar a nova div à coluna BACKLOG
  ColunaCard = document.getElementById("Backlog");
  ColunaCard.appendChild(newTask);
  
  // Adicionar ouvintes de arrastar à nova tarefa
  newTask.addEventListener("dragstart", () => {
      newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
      newTask.classList.remove("is-dragging");
  });
  containerCard(newTask);
}