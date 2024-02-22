import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onDeleteTask, onToggleTaskCompletion }) => {
  return (
    <li className="task-item">
      <span className={`task-text ${task.completed ? 'completed' : ''}`}>
        {task.text}
      </span>
      <button className="task-button" onClick={() => onToggleTaskCompletion(task.id)}>Complete</button>
      <button className="task-button2" onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default React.memo(TaskItem);