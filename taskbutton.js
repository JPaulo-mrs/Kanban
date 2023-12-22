var corTitulo;
var botaoAdm;
var botaoGep;
var botaoMkt;
var botaoPjt;
var botaoPres;
var botaoCom;
var Card;

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

  // Adicionar a nova div à coluna BACKLOG
  var backlogColumn = document.getElementById("todo-lane");
  backlogColumn.appendChild(newTask);
  
  // Adicionar ouvintes de arrastar à nova tarefa
  newTask.addEventListener("dragstart", () => {
      newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
      newTask.classList.remove("is-dragging");
  });
  containerCard(newTask);
}


function containerCard(clickedElement) {
  document.getElementById("cardEx").style.display = "block";
  Card = clickedElement;
  var textTitulo = clickedElement.querySelector(".tasktext").innerText;
  var titulo = document.createElement("textarea");
  titulo.className = "tituloCard";
  titulo.id = "tituloCard";
  titulo.textContent = textTitulo;
  var local1 = document.getElementById("cardEx-content");
  local1.appendChild(titulo);
  //criando a box de comentario
  var boxComentario = document.createElement("textarea");
  boxComentario.className = "boxComentario";
  boxComentario.id = "boxComentario";
  var local2 = document.getElementById("descricao");
  local2.appendChild(boxComentario);
  var comentario = clickedElement.querySelector(".comentario");
  if(comentario!==null)
  {
    comentario = clickedElement.querySelector(".comentario").innerText;
    boxComentario.textContent = comentario;
  }
  else
  {
    comentario = document.createElement("div");
    comentario.className = "comentario";
    comentario.id = "comentario";
    comentario.style.display = "none";
    clickedElement.appendChild(comentario);
  }
  //criando a box de atividade
  var boxAtiv = document.createElement("textarea");
  boxAtiv.className = "boxAtividade";
  boxAtiv.id = "boxAtiv";
  var local3 = document.getElementById("atividade");
  local3.appendChild(boxAtiv);
  var ativ = clickedElement.querySelector(".atividade");
  if(ativ!==null)
  {
    ativ = clickedElement.querySelector(".atividade").innerText;
    boxAtiv.textContent = ativ;
    console.log("pres1");
  }
  else
  {
    ativ = document.createElement("div");
    ativ.className = "atividade";
    ativ.style.display = "none";
    clickedElement.appendChild(ativ);
    console.log("pres");
  }
  //criando a box de responsavel
  var boxResp = document.createElement("textarea");
  boxResp.className = "boxResponsavel";
  boxResp.id = "boxResponsavel";
  var local4 = document.getElementById("responsavel");
  local4.appendChild(boxResp);
  var responsavel = clickedElement.querySelector(".responsavel");
  if(responsavel!==null)
  {
    responsavel = clickedElement.querySelector(".responsavel").innerText;
    boxResp.textContent = responsavel;
  }
  else
  {
    responsavel = document.createElement("div");
    responsavel.className = "responsavel";
    responsavel.style.display = "none";
    clickedElement.appendChild(responsavel);
  }

  //criando input de calendario
  var inputCalendario = document.createElement("input");
  inputCalendario.className = "data";
  inputCalendario.id = "InputCalendario";
  inputCalendario.type = "date";
  var local5 = document.getElementById("data");
  local5.appendChild(inputCalendario);
  var calendario = clickedElement.querySelector(".calendario");
  if(calendario!==null)
  {
    calendario = clickedElement.querySelector(".calendario").innerText;
    console.log(calendario);
    inputCalendario.value = calendario;
  }
  else
  {
    inputCalendario.value = "aaaa-mm-dd";
    calendario = document.createElement("div");
    calendario.className = "calendario";
    calendario.id = "calendario";
    calendario.style.display = "none";
    clickedElement.appendChild(calendario);
  }

  //criando botão adm fin
  botaoAdm = document.createElement("button");
  criarBotao(botaoAdm, "Adm Fin");
  botaoMkt = document.createElement("button");
  criarBotao(botaoMkt, "Marketing");
  botaoPres = document.createElement("button");
  criarBotao(botaoPres, "Presidência");
  botaoGep = document.createElement("button");
  criarBotao(botaoGep, "GEP");
  botaoPjt = document.createElement("button");
  criarBotao(botaoPjt, "Projetos");
  botaoCom = document.createElement("button");
  criarBotao(botaoCom, "Comercial");
  corTitulo = clickedElement.querySelector(".taskCircle");
  switch(corTitulo.style.backgroundColor)
  {
    case "rgb(139, 95, 164)":
      console.log("pres");
      botaoPres.style.backgroundColor = "rgb(139, 95, 164)";
      botaoPres.value = "ativado";
      break;
    case "rgb(73, 87, 102)":
      console.log("Adm");
      botaoAdm.style.backgroundColor = "rgb(73, 87, 102)";
      botaoAdm.value = "ativado";
      break;
    case "rgb(246, 165, 45)":
      console.log("Mkt");
      botaoMkt.style.backgroundColor = "rgb(246, 165, 45)";
      botaoMkt.value = "ativado";
      break;
    case "rgb(229, 51, 36)":
      console.log("GEP");
      botaoGep.style.backgroundColor = "rgb(229, 51, 36)";
      botaoGep.value = "ativado";
      break;
    case "rgb(47, 153, 61)":
      console.log("Pjt");
      botaoPjt.style.backgroundColor = "rgb(47, 153, 61)";
      botaoPjt.value = "ativado";
      break;
    case "rgb(41, 219, 226)":
      console.log("Com");
      botaoCom.style.backgroundColor = "rgb(41, 219, 226)";
      botaoCom.value = "ativado";
      break;
  }
}

function closeContainer() {
  // Obtém o elemento da caixa de diálogo pelo ID e define o estilo de exibição como "none"
  document.getElementById("cardEx").style.display = "none";
  var titulo = document.getElementById("tituloCard").value;
  document.getElementById("tituloCard").remove();
  Card.querySelector(".tasktext").textContent = titulo;  
  var textComent = document.getElementById("boxComentario").value;
  document.getElementById("boxComentario").remove();
  var comentario = Card.querySelector(".comentario");
  comentario.textContent = textComent;

  var textAtiv = document.getElementById("boxAtiv").value;
  document.getElementById("boxAtiv").remove();
  var atividade = Card.querySelector(".atividade");
  atividade.textContent = textAtiv;

  var textResp = document.getElementById("boxResponsavel").value;
  document.getElementById("boxResponsavel").remove();
  var responsavel = Card.querySelector(".responsavel");
  responsavel.textContent = textResp;

  var data = document.getElementById("calendario").value;
  document.getElementById("InputCalendario").remove();
  Card.querySelector(".calendario").textContent = data;

  var lista = document.getElementsByClassName("setorButton");
  for(var i = lista.length - 1; i >= 0; i--)
  {
    lista[i].remove()
  }
  
}

function criarBotao(nomeBotao, name)
{
  var local = document.getElementById("setores");
  var espaco = document.createElement("br");
  espaco.className = "setorButton";
  local.appendChild(espaco);
  nomeBotao.className = "setorButton "+name;
  nomeBotao.setAttribute('onclick', 'mudar(this)');
  local.appendChild(nomeBotao);
  var buttonText = document.createElement("p");
  buttonText.className = "setortext";
  buttonText.textContent = name;
  nomeBotao.appendChild(buttonText);
}

function mudar(elemento) {
  switch(elemento.className)
  {
    case "setorButton Adm Fin":
      corTitulo.style.backgroundColor = "rgb(73, 87, 102)";
      botaoAdm.style.backgroundColor = "rgb(73, 87, 102)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";
    break;
    case "setorButton Marketing":
      corTitulo.style.backgroundColor = "rgb(246, 165, 45)";
      botaoMkt.style.backgroundColor = "rgb(246, 165, 45)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";

    break;
    case "setorButton GEP":
      corTitulo.style.backgroundColor = "rgb(229, 51, 36)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(229, 51, 36)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";
    break;
    case "setorButton Comercial":
      corTitulo.style.backgroundColor = "rgb(41, 219, 226)";
      botaoCom.style.backgroundColor = "rgb(41, 219, 226)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";
    break;
    case "setorButton Projetos":
      corTitulo.style.backgroundColor = "rgb(47, 153, 61)";
      botaoPjt.style.backgroundColor = "rgb(47, 153, 61)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";
    break;
    case "setorButton Presidência":
      corTitulo.style.backgroundColor = "rgb(139, 95, 164)";
      botaoPres.style.backgroundColor = "rgb(139, 95, 164)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
    break;
  }
}


