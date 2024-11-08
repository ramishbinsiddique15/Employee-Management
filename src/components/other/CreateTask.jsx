import React from 'react'

const CreateTask = () => {
  return (
    <div className="mx-auto bg-[#1c1c1c] shadow-lg rounded-lg p-8 mt-10">
        <h2 className="text-2xl font-semibold text-white mb-6">Create a New Task</h2>
        <form className="flex space-x-8">
          
          <div className="w-1/2 space-y-6">
            <div>
              <label className="block text-gray-300 font-medium mb-1">Task Title</label>
              <input 
                type="text" 
                placeholder="Make a UI design" 
                className="w-full px-4 py-2 bg-gray-950 text-white border border-gray-800 rounded-lg focus:outline-none focus:border-indigo-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-1">Date</label>
              <input 
                type="date" 
                className="w-full px-4 py-2 bg-gray-950 text-white border border-gray-800 rounded-lg focus:outline-none focus:border-indigo-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-1">Assign To</label>
              <input 
                type="text" 
                placeholder="Employee name" 
                className="w-full px-4 py-2 bg-gray-950 text-white border border-gray-800 rounded-lg focus:outline-none focus:border-indigo-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-1">Category</label>
              <input 
                type="text" 
                placeholder="Design, Dev, etc." 
                className="w-full px-4 py-2 bg-gray-950 text-white border border-gray-800 rounded-lg focus:outline-none focus:border-indigo-400"
              />
            </div>
          </div>

          <div className="w-1/2 flex flex-col justify-between">
            <div>
              <label className="block text-gray-300 font-medium mb-1">Description</label>
              <textarea 
                placeholder="Describe the task here" 
                className="w-full h-32 px-4 py-2 bg-gray-950 text-white border border-gray-800 rounded-lg resize-none focus:outline-none focus:border-indigo-400"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-3 mt-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
