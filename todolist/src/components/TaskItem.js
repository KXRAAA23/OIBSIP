import React, { useState } from "react";

const TaskItem = ({ task, onComplete, onDelete, onEdit, isCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(task.id, editedText, isCompleted);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`task-item ${isCompleted ? "completed" : ""}`}>
      {!isEditing ? (
        <>
          <span>{task.text}</span>
          {!isCompleted && (
            <button className="complete" onClick={() => onComplete(task.id)}>
              Complete
            </button>
          )}
        </>
      ) : (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button className="delete" onClick={() => onDelete(task.id, isCompleted)}>
        Delete
      </button>
      <div className="task-meta">
        <small>Created: {task.createdAt.toLocaleString()}</small>
        {task.completedAt && (
          <small>Completed: {task.completedAt.toLocaleString()}</small>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
