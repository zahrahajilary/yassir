
import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-3 text-gray-700">
        <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 01-8-8H0c0 4.418 3.582 8 8 8v-2zm5-5.291c1.865-2.114 3-4.896 3-7.938h-4a7.962 7.962 0 01-2 5.291l3 2.647zM12 4a8 8 0 018 8h4c0-4.418-3.582-8-8-8v2z"></path>
        </svg>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default LoadingComponent;




