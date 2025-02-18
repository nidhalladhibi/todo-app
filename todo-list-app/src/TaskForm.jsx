import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTask, updateTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editTask) {
      setTaskName(editTask.name);
      setTaskDescription(editTask.description);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim() || !taskDescription.trim()) {
      setError("Both fields are required.");
      return;
    }

    const task = { name: taskName, description: taskDescription };
    if (editTask) {
      updateTask({ ...editTask, ...task });
    } else {
      addTask(task);
    }
    setTaskName("");
    setTaskDescription("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit">{editTask ? "Update Task" : "Add Task"}</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default TaskForm;