import React from "react";

const TaskItem = ({ task, setEditTask, confirmDelete, toggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div>
        <button onClick={() => setEditTask(task)}>Edit</button> {/* Utiliser confirmEdit */}
        <button onClick={() => confirmDelete(task.id)}>Delete</button>
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;