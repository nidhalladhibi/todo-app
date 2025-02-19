import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import PinModal from "./PinModal"; // Importer la modale
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [showPinModal, setShowPinModal] = useState(false); // État pour afficher la modale
  const [taskToDelete, setTaskToDelete] = useState(null); // Tâche à supprimer
  const [taskToEdit, setTaskToEdit] = useState(null); // Tâche à éditer
  const [isEditMode, setIsEditMode] = useState(false); // Mode édition ou suppression

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setEditTask(null);
  };

  const confirmDelete = (id) => {
    setTaskToDelete(id); // Définir la tâche à supprimer
    setIsEditMode(false); // Mode suppression
    setShowPinModal(true); // Afficher la modale pour le code PIN
  };

  const confirmEdit = (task) => {
    setTaskToEdit(task); // Définir la tâche à éditer
    setIsEditMode(true); // Mode édition
    setShowPinModal(true); // Afficher la modale pour le code PIN
  };

  const handlePinValidation = (pin) => {
    if (pin === "1234") { // Remplacez "1234" par votre code PIN
      if (isEditMode) {
        setEditTask(taskToEdit); // Passer en mode édition
      } else {
        setTasks(tasks.filter((task) => task.id !== taskToDelete)); // Supprimer la tâche
      }
      setShowPinModal(false); // Fermer la modale
      setTaskToDelete(null); // Réinitialiser la tâche à supprimer
      setTaskToEdit(null); // Réinitialiser la tâche à éditer
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
        setEditTask={confirmEdit} // Utiliser confirmEdit au lieu de setEditTask
        confirmDelete={confirmDelete}
        toggleComplete={toggleComplete}
      />
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