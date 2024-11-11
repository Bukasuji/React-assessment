import React, { useState } from 'react';

const GreetingForm = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div className="max-w-xs mx-auto mt-6 p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="text-gray-700">Enter your name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <button
          type="submit"
          className="bg-[#FF5733] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Submit
        </button>
      </form>
      {greeting && (
        <h3 className="mt-4 text-xl text-gray-800">
          {greeting}{' '}
          <span className="wave inline-block animate-wave">👋</span>
        </h3>
      )}
    </div>
  );
};

export default GreetingForm;
