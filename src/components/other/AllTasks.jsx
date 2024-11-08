import React from "react";

const AllTasks = () => {
  return (
    <div id="tasklist" className="bg-[#1c1c1c] p-5 mt-5 rounded h-48 overflow-auto">
      <div className="bg-blue-500 mb-2 py-2 px-4 flex justify-between rounded text-white">
        <h2>Ramesh</h2>
        <h3>3D Game</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-green-500 mb-2 py-2 px-4 flex justify-between rounded text-white">
        <h2>Ramesh</h2>
        <h3>3D Model</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-purple-500 mb-2 py-2 px-4 flex justify-between rounded text-white">
        <h2>Ramesh</h2>
        <h3>Game Design</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-yellow-500 mb-2 py-2 px-4 flex justify-between rounded text-black">
        <h2>Ramesh</h2>
        <h3>Animation</h3>
        <h5>Status</h5>
      </div>
    </div>
  );
};

export default AllTasks;
