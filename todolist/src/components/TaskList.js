import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ title, tasks, onComplete, onDelete, onEdit, isCompletedList }) => {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={(id, updatedText) => onEdit(id, updatedText, isCompletedList)}
          isCompleted={isCompletedList}
          />

        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
