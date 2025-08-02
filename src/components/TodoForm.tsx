import React from "react";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task..."
            className="w-full px-4 py-4 pr-12 text-base bg-gray-900 border border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 placeholder-gray-400 text-white transition-all duration-200"
          />
          <button
            type="submit"
            disabled={!text.trim()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 disabled:bg-gray-700 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </form>

      {/* Quick actions */}
      <div className="flex items-center mt-4 space-x-4 text-sm text-gray-400">
        <div className="flex items-center space-x-1">
          <kbd className="px-2 py-1 text-xs bg-gray-800 border border-gray-600 rounded text-gray-200">
            Enter
          </kbd>
          <span>to add task</span>
        </div>
        <div className="flex items-center space-x-1">
          <kbd className="px-2 py-1 text-xs bg-gray-800 border border-gray-600 rounded text-gray-200">
            Ctrl
          </kbd>
          <span>+</span>
          <kbd className="px-2 py-1 text-xs bg-gray-800 border border-gray-600 rounded text-gray-200">
            Enter
          </kbd>
          <span>for quick add</span>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
