import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          <h2 className="mt-6 text-xl font-semibold animate-pulse">
            Loading, please wait...
          </h2>
        </div>
      );
};

export default Loading;

