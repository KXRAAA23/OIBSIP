import React, { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask({ id: Date.now(), text: taskText, createdAt: new Date() });
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="Add a task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
