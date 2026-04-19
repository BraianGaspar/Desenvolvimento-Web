import { useState } from "react";
import "./App.css";

function App() {
  // Estado para armazenar a lista de tarefas
  const [tasks, setTasks] = useState([]);

  // Estado para controlar o valor do input
  const [inputValue, setInputValue] = useState("");

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    // Validação: não permitir tarefas vazias
    if (inputValue.trim() === "") {
      alert("Por favor, digite uma tarefa!");
      return;
    }

    // Criar novo objeto de tarefa com ID único
    const newTask = {
      id: Date.now(), // ID único baseado no timestamp
      text: inputValue.trim(),
    };

    // Atualizar o estado de forma imutável
    setTasks([...tasks, newTask]);

    // Limpar o input
    setInputValue("");
  };

  // Função para remover uma tarefa
  const removeTask = (taskId) => {
    // Filtrar o array, removendo a tarefa com o ID especificado
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    // Atualizar o estado com o novo array
    setTasks(updatedTasks);
  };

  // Função para lidar com a tecla Enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h1>Minhas Tarefas</h1>

        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite uma nova tarefa..."
          />
          <button onClick={addTask}>Adicionar</button>
        </div>

        <ul id="taskList">
          {tasks.length === 0 ? (
            <li className="empty-message">Nenhuma tarefa adicionada ainda!</li>
          ) : (
            tasks.map((task) => (
              <li key={task.id} onClick={() => removeTask(task.id)}>
                {task.text}
              </li>
            ))
          )}
        </ul>

        <div className="info">
          <p>Clique em qualquer tarefa para removê-la</p>
        </div>
      </div>
    </div>
  );
}

export default App;
