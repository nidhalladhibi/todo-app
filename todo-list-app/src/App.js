import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import PinModal from "./PinModal";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [editTask, setEditTask] = useState(null);
  const [showPinModal, setShowPinModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem("history"))); // État pour l'historique

  // Load tasks and history from localStorage on initial render
  // useEffect(() => {
  //   const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //   const storedHistory = JSON.parse(localStorage.getItem("history")) || [];
  //   setTasks(storedTasks);
  //   setHistory(storedHistory);
  // }, []);

  // Save tasks and history to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("history", JSON.stringify(history));
  }, [tasks, history]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const updateTask = (updatedTask) => {
    const oldTask = tasks.find((task) => task.id === updatedTask.id);
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setEditTask(null);

    // Ajouter à l'historique
    setHistory([
      ...history,
      {
        type: "edit",
        task: oldTask,
        updatedTask: updatedTask,
        timestamp: new Date().toLocaleString(),
      },
    ]);
  };

  const confirmDelete = (id) => {
    setTaskToDelete(id);
    setIsEditMode(false);
    setShowPinModal(true);
  };

  const confirmEdit = (task) => {
    setTaskToEdit(task);
    setIsEditMode(true);
    setShowPinModal(true);
  };

  const handlePinValidation = (pin) => {
    if (pin === "1234") {
      if (isEditMode) {
        setEditTask(taskToEdit);
      } else {
        const deletedTask = tasks.find((task) => task.id === taskToDelete);
        setTasks(tasks.filter((task) => task.id !== taskToDelete));

        // Ajouter à l'historique
        setHistory([
          ...history,
          {
            type: "delete",
            task: deletedTask,
            timestamp: new Date().toLocaleString(),
          },
        ]);
      }
      setShowPinModal(false);
      setTaskToDelete(null);
      setTaskToEdit(null);
    } else {
      alert("Code PIN incorrect. L'opération a échoué.");
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} editTask={editTask} updateTask={updateTask} />
      <TaskList
        tasks={tasks}
        setEditTask={confirmEdit}
        confirmDelete={confirmDelete}
        toggleComplete={toggleComplete}
      />

      {/* Afficher l'historique */}
      <div className="history">
        <h2>Historique des tâches</h2>
        {history.length === 0 ? (
          <p>Aucun historique disponible.</p>
        ) : (
          <ul>
            {history.map((entry, index) => (
              <li key={index}>
                {entry.type === "delete" ? (
                  <>
                    <strong>Supprimé :</strong> {entry.task.name} (le {entry.timestamp})
                  </>
                ) : (
                  <>
                    <strong>Modifié :</strong> {entry.task.name} → {entry.updatedTask.name} (le {entry.timestamp})
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {showPinModal && (
        <PinModal
          onClose={() => setShowPinModal(false)}
          onConfirm={handlePinValidation}
        />
      )}
    </div>
  );
};

export default App;