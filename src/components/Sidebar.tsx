import React from "react";
import { FilterType } from "../types";
import logo from "./logo.png";

interface SidebarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  totalCount: number;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
  onShowConstitution: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentFilter,
  onFilterChange,
  totalCount,
  activeCount,
  completedCount,
  onClearCompleted,
  onShowConstitution,
}) => {
  const menuItems = [
    {
      id: "all" as FilterType,
      label: "Все задачи",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      count: totalCount,
    },
    {
      id: "active" as FilterType,
      label: "Активные",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      count: activeCount,
    },
    {
      id: "completed" as FilterType,
      label: "Завершенные",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      count: completedCount,
    },
  ];

  return (
    <div className="w-64 bg-black text-white h-full flex flex-col border-r border-gray-800">
      {/* Header */}
              <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-center">
            <img src={logo} alt="Leader Helper Logo" className="w-25 h-25 object-contain" />
          </div>
        </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onFilterChange(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all duration-200 group ${
                currentFilter === item.id
                  ? "bg-gray-600 text-white shadow-lg"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-3">
                <span
                  className={`transition-colors ${
                    currentFilter === item.id
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </div>
              {item.count > 0 && (
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    currentFilter === item.id
                      ? "bg-gray-700 text-white"
                      : "bg-gray-800 text-gray-200 group-hover:bg-gray-600"
                  }`}
                >
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <h3 className="text-sm font-medium text-gray-300 mb-3">Статистика</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-200">Всего задач</span>
              <span className="text-white font-medium">{totalCount}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-200">Осталось</span>
              <span className="text-gray-400 font-medium">{activeCount}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-200">Завершено</span>
              <span className="text-green-400 font-medium">
                {completedCount}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          {totalCount > 0 && (
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>Прогресс</span>
                <span>{Math.round((completedCount / totalCount) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(completedCount / totalCount) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Constitution button */}
        <button
          onClick={onShowConstitution}
          className="w-full mt-4 px-4 py-2 text-sm text-gray-300 hover:text-gray-200 hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>Конституция С-А</span>
        </button>

        {/* Clear completed button */}
        {completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="w-full mt-2 px-4 py-2 text-sm text-gray-300 hover:text-gray-200 hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
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
            <span>Очистить завершенные ({completedCount})</span>
          </button>
        )}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <div className="text-xs text-gray-400 text-center">
          created by <a href="https://github.com/lxrkii" className="text-gray-400 hover:text-white">Rindo Odinson</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
