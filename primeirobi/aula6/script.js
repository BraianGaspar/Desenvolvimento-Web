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

  // 📌 IMPLEMENTAÇÃO DA DELEGAÇÃO DE EVENTOS
  // Como garantir que os itens, criados dinamicamente, também possam ser removidos ao serem clicados?
  // ✅ Solução: Delegação de eventos - o evento de clique é capturado no elemento pai <ul>
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
      event.preventDefault(); // Previne comportamento padrão (se houver)
      addTask();
    }
  });

  // Bônus: Limpar o campo ao clicar com duplo clique (opcional, mas útil)
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

  // Pequeno atalho: se o usuário tentar adicionar com input vazio, o placeholder já avisa
  console.log(
    "✅ To-Do List carregada com sucesso! Use delegação de eventos para remover tarefas.",
  );
});

// ==============================================
// VERSÃO ALTERNATIVA COM CHECKBOX (OPCIONAL)
// Caso queira implementar a funcionalidade extra de checkbox,
// descomente o código abaixo e substitua a função addTask
// ==============================================
/*
// Versão com checkbox (tarefas concluídas)
function addTaskWithCheckbox() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.gap = '12px';
    li.style.cursor = 'default';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.width = '20px';
    checkbox.style.height = '20px';
    checkbox.style.cursor = 'pointer';
    
    const span = document.createElement('span');
    span.textContent = taskText;
    span.style.flex = '1';
    span.style.wordBreak = 'break-word';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.style.background = 'none';
    deleteBtn.style.border = 'none';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.style.fontSize = '18px';
    deleteBtn.style.opacity = '0.6';
    deleteBtn.style.transition = 'opacity 0.2s';
    
    deleteBtn.addEventListener('mouseenter', () => deleteBtn.style.opacity = '1');
    deleteBtn.addEventListener('mouseleave', () => deleteBtn.style.opacity = '0.6');
    
    // Marcar como concluída
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through';
            span.style.color = '#999';
            li.style.background = '#f0f0f0';
        } else {
            span.style.textDecoration = 'none';
            span.style.color = '#333';
            li.style.background = '#f8f9fa';
        }
    });
    
    // Remover ao clicar no botão delete
    deleteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        li.remove();
    });
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
}
*/
