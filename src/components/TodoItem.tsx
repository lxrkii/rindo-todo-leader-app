import React from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editText, setEditText] = React.useState(todo.text);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(!isEditing);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleEdit();
    }
    if (e.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`group flex items-center gap-4 p-4 bg-gray-900 rounded-xl border transition-all duration-200 hover:shadow-lg hover:shadow-gray-900/20 ${
        todo.completed
          ? "border-gray-700 bg-gray-800/30"
          : "border-gray-700 hover:border-gray-600"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
          todo.completed
            ? "bg-green-500 border-green-500 text-white shadow-sm"
            : "border-gray-600 hover:border-gray-400 hover:bg-gray-800"
        }`}
      >
        {todo.completed && (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="flex-grow min-w-0">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={handleEdit}
            className="w-full px-3 py-2 text-base border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-gray-800 text-white"
            autoFocus
          />
        ) : (
          <div className="flex flex-col">
            <span
              className={`text-base transition-all duration-200 cursor-pointer ${
                todo.completed
                  ? "line-through text-gray-500"
                  : "text-white hover:text-gray-400"
              }`}
              onDoubleClick={() => setIsEditing(true)}
            >
              {todo.text}
            </span>
            <span className="text-xs text-gray-400 mt-1">
              {new Date(todo.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div
        className={`flex items-center gap-1 transition-opacity duration-200 ${
          isHovered || isEditing ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={handleEdit}
          className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-lg transition-all duration-200"
          title={isEditing ? "Save changes" : "Edit task"}
        >
          {isEditing ? (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          )}
        </button>

        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-lg transition-all duration-200"
          title="Delete task"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
