import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const markAsComplete = (id) => {
    const taskToComplete = tasks.find((task) => task.id === id);
    setTasks(tasks.filter((task) => task.id !== id));
    setCompletedTasks((prev) => [...prev, { ...taskToComplete, completedAt: new Date() }]);
  };

  const deleteTask = (id, isCompleted) => {
    if (isCompleted) {
      setCompletedTasks(completedTasks.filter((task) => task.id !== id));
    } else {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const editTask = (id, updatedText, isCompleted) => {
    if (isCompleted) {
      setCompletedTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? { ...task, text: updatedText } : task))
      );
    } else {
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? { ...task, text: updatedText } : task))
      );
    }
  };

  return (
    <div className="app">
      <h1>To-Do App</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList
        title="Pending Tasks"
        tasks={tasks}
        onComplete={markAsComplete}
        onDelete={deleteTask}
        onEdit={editTask}
      />
      <TaskList
        title="Completed Tasks"
        tasks={completedTasks}
        isCompletedList
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
};

export default App;
