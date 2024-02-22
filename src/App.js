import React, { useState, useEffect, useMemo } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text: task, completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1 className="header">Todo</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
};

export default App