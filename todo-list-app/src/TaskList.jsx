import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setEditTask, confirmDelete, toggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          setEditTask={setEditTask} // Transmettre confirmEdit
          confirmDelete={confirmDelete}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;