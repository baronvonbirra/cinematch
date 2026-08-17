import React from 'react';

export const Tabs = ({ activeTab, onChangeTab, tabs }) => {
  return (
    <div className="flex overflow-x-auto gap-2 border-b border-dark-700 pb-2 mb-6 scrollbar-none">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChangeTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
              isActive
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-dark-800 text-slate-400 hover:text-white hover:bg-dark-700'
            }`}
          >
            {Icon && <Icon className="w-4 h-4" />}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
