import React from 'react';

const HelloWorld: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">Hello World!</h1>
      <p className="text-lg text-green-500">Welcome to my first web page!</p>
    </div>
  );
};

export default HelloWorld;