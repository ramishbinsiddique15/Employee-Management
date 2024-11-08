import React from "react";

const TaskList = () => {
  return (
    <div id="tasklist" className="h-[55%] overflow-x-auto w-full py-5 flex items-center justify-start gap-10 flex-nowrap mt-10">
      <div className="h-full w-[300px] bg-green-400 p-5 flex-shrink-0 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-green-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">15 Oct 2024</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a 3D Game</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis eligendi, dolore repellendus quas reprehenderit?</p>
      </div>

      <div className="h-full w-[300px] bg-blue-400 p-5 flex-shrink-0 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-blue-600 px-3 py-1 rounded text-sm">Medium</h3>
          <h4 className="text-sm">16 Oct 2024</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Learn React Native</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis eligendi, dolore repellendus quas reprehenderit?</p>
      </div>

      <div className="h-full w-[300px] bg-red-400 p-5 flex-shrink-0 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">Low</h3>
          <h4 className="text-sm">17 Oct 2024</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Build a Portfolio</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis eligendi, dolore repellendus quas reprehenderit?</p>
      </div>

      <div className="h-full w-[300px] bg-yellow-400 p-5 flex-shrink-0 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-yellow-600 px-3 py-1 rounded text-sm">Urgent</h3>
          <h4 className="text-sm">18 Oct 2024</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Prepare Presentation</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis eligendi, dolore repellendus quas reprehenderit?</p>
      </div>

      <div className="h-full w-[300px] bg-purple-400 p-5 flex-shrink-0 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-purple-600 px-3 py-1 rounded text-sm">Normal</h3>
          <h4 className="text-sm">19 Oct 2024</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Update Resume</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis eligendi, dolore repellendus quas reprehenderit?</p>
      </div>

      <div className="h-full w-[300px] bg-teal-400 p-5 flex-shrink-0 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-teal-600 px-3 py-1 rounded text-sm">Optional</h3>
          <h4 className="text-sm">20 Oct 2024</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Read Documentation</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis eligendi, dolore repellendus quas reprehenderit?</p>
      </div>
    </div>
  );
};

export default TaskList;
