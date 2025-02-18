import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setEditTask, deleteTask, toggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          setEditTask={setEditTask}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;