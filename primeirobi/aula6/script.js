// Aguarda o DOM carregar completamente antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Capturando os elementos do DOM
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

  // Função para adicionar uma nova tarefa
  function addTask() {
    // 1. Capturar o texto do input
    const taskText = taskInput.value.trim();

    // Validação: não permitir tarefas vazias ou apenas espaços
    if (taskText === "") {
      // Feedback visual para o usuário
      taskInput.style.borderColor = "#dc3545";
      taskInput.placeholder = "Por favor, digite uma tarefa!";
      setTimeout(() => {
        taskInput.style.borderColor = "#e0e0e0";
        taskInput.placeholder = "Digite uma nova tarefa...";
      }, 2000);
      return;
    }

    // 2. Criar um novo elemento <li> dinamicamente
    const newTaskItem = document.createElement("li");

    // 3. Definir o conteúdo do <li> com o texto da tarefa
    newTaskItem.textContent = taskText;

    // Adicionando um atributo personalizado opcional (para rastreamento)
    newTaskItem.setAttribute("data-created", new Date().toISOString());

    // 4. Adicionar o novo <li> à <ul> na página
    taskList.appendChild(newTaskItem);

    // 5. Limpar o campo de input para que uma nova tarefa possa ser inserida
    taskInput.value = "";

    // Foco no input novamente para facilitar a digitação
    taskInput.focus();

    // Feedback sutil de sucesso (opcional)
    addButton.style.transform = "scale(0.95)";
    setTimeout(() => {
      addButton.style.transform = "scale(1)";
    }, 100);
  }

  // Função para remover tarefa (será usada na delegação de eventos)
  function removeTask(taskElement) {
    // Animação de saída suave antes de remover
    taskElement.style.animation = "slideOut 0.2s ease";
    taskElement.style.transform = "translateX(20px)";
    taskElement.style.opacity = "0";

    // Remove o elemento após a animação
    setTimeout(() => {
      if (taskElement && taskElement.remove) {
        taskElement.remove();
      }
    }, 150);
  }

  // Como garantir que os itens, criados dinamicamente, também possam ser removidos ao serem clicados
  // Delegação de eventos - o evento de clique é capturado no elemento pai <ul>
  // que já existe no DOM desde o início. Assim, qualquer <li> adicionado futuramente
  // também terá seu clique detectado e poderá ser removido.

  taskList.addEventListener("click", function (event) {
    // Verifica se o elemento clicado é um <li> (ou se está dentro de um <li>)
    // O target pode ser o próprio <li> ou algum elemento filho (se houvesse, mas no nosso caso é só texto)
    const clickedElement = event.target;

    // Encontra o elemento <li> mais próximo (se o clique foi em um filho, como um span ou algo)
    const taskItem = clickedElement.closest("li");

    // Se encontrou um item de tarefa, remove
    if (taskItem) {
      removeTask(taskItem);
    }
  });

  // Adicionar tarefa ao clicar no botão
  addButton.addEventListener("click", addTask);

  // Adicionar tarefa ao pressionar a tecla "Enter" no campo de input
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Previne comportamento padrão
      addTask();
    }
  });

  // Limpar o campo ao clicar com duplo clique
  taskInput.addEventListener("dblclick", function () {
    taskInput.value = "";
    taskInput.focus();
  });

  // Adiciona animação de slideOut para remoção (definindo keyframes dinamicamente)
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
        @keyframes slideOut {
            0% {
                opacity: 1;
                transform: translateX(0);
            }
            100% {
                opacity: 0;
                transform: translateX(30px);
            }
        }
    `;
  document.head.appendChild(styleSheet);

  // Se o usuário tentar adicionar com input vazio, o placeholder já avisa
  console.log(
    " To-Do List carregada com sucesso! Use delegação de eventos para remover tarefas.",
  );
});
