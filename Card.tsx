
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children, className = '', actions }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md flex flex-col ${className}`}>
      <div className="p-4 sm:p-5 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {actions && <div className="flex items-center space-x-2">{actions}</div>}
      </div>
      <div className="p-4 sm:p-5 flex-grow overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Card;