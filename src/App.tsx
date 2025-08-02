import React from "react";
import { Todo, FilterType } from "./types";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";
import Constitution from "./components/Constitution";
import CriminalCode from "./components/CriminalCode";

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [filter, setFilter] = React.useState<FilterType>("all");
  const [showConstitution, setShowConstitution] = React.useState(false);
  const [showCriminalCode, setShowCriminalCode] = React.useState(false);

  // Load todos from localStorage on mount
  React.useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }));
        setTodos(parsedTodos);
      } catch (error) {
        console.error("Ошибка загрузки задач из localStorage:", error);
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const filteredTodos = React.useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="h-screen bg-black flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        currentFilter={filter}
        onFilterChange={setFilter}
        totalCount={todos.length}
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={clearCompleted}
        onShowConstitution={() => setShowConstitution(true)}
        onShowCriminalCode={() => setShowCriminalCode(true)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-gray-900 border-b border-gray-700 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-300">
                {filter === "all"
                  ? "Все задачи"
                  : filter === "active"
                    ? "Активные задачи"
                    : "Завершенные задачи"}
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                {filter === "all"
                  ? `${todos.length} задач всего`
                  : filter === "active"
                    ? `${activeCount} задач осталось`
                    : `${completedCount} задач завершено`}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400">
                {new Date().toLocaleDateString("ru-RU", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto bg-gray-950">
          <div className="max-w-4xl mx-auto p-8">
            <TodoForm onAdd={addTodo} />

            {/* Task List */}
            <div className="space-y-3">
              {filteredTodos.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-12 h-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-400 mb-2">
                    {todos.length === 0
                      ? "Задач пока нет"
                      : filter === "active"
                        ? "Нет активных задач"
                        : filter === "completed"
                          ? "Нет завершенных задач"
                          : "Задачи не найдены"}
                  </h3>
                  <p className="text-gray-300 max-w-sm mx-auto">
                    {todos.length === 0
                      ? "Начните с добавления первой задачи выше"
                      : filter === "active"
                        ? "Все задачи завершены! Отличная работа!"
                        : filter === "completed"
                          ? "Завершите несколько задач, чтобы увидеть их здесь"
                          : "Попробуйте изменить настройки фильтра"}
                  </p>
                </div>
              ) : (
                <>
                  {filteredTodos.map((todo) => (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      onToggle={toggleTodo}
                      onDelete={deleteTodo}
                      onEdit={editTodo}
                    />
                  ))}

                  {/* Tips */}
                  <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-400 mb-1">
                          Полезные советы
                        </h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Дважды кликните на задачу для быстрого редактирования</li>
                          <li>
                            • Используйте боковую панель для переключения между видами
                          </li>
                          <li>• Нажмите Enter для быстрого добавления задач</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Constitution Modal */}
      <Constitution
        isOpen={showConstitution}
        onClose={() => setShowConstitution(false)}
      />

      {/* Criminal Code Modal */}
      <CriminalCode
        isOpen={showCriminalCode}
        onClose={() => setShowCriminalCode(false)}
      />
    </div>
  );
};

export default App;
