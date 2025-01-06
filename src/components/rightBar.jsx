import React from 'react';

const RightBar = () => {
  return (
    <div className="bg-black text-white w-80 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Your Library</h2>
        <button className="text-gray-400 hover:text-white">+</button>
      </div>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-800 text-sm p-2 rounded text-gray-300 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default RightBar;