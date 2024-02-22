import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, onDeleteTask, onToggleTaskCompletion }) => {
  return (
    <ul className='task-list'>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask} onToggleTaskCompletion={onToggleTaskCompletion} />
      ))}
    </ul>
  );
};

export default TaskList;
