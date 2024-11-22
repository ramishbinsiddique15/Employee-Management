import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div
      className="bg-[#1c1c1c] p-5 mt-5 rounded h-72 "
    >
      <div className="bg-emerald-500 mb-2 py-2 px-4 flex justify-between rounded text-white">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Completed </h5>
        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
      </div>
      <div id="tasklist" className="h-[80%] overflow-auto">
      {userData?.employees?.map((employee) => (
        <div
          key={employee.id} // Use a unique identifier here
          className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded text-white"
        >
          <h2 className="w-1/5 text-lg font-medium">{employee.firstName}</h2>
          <h3 className="w-1/5 text-lg font-medium text-blue-600">{employee.taskCount.newTask}</h3>
          <h5 className="w-1/5 text-lg font-medium text-yellow-400">{employee.taskCount.active}</h5>
          <h5 className="w-1/5 text-lg font-medium text-green-600">{employee.taskCount.completed}</h5>
          <h5 className="w-1/5 text-lg font-medium text-red-600">{employee.taskCount.failed}</h5>
        </div>
      ))}
      </div>
    </div>
  );
};

export default AllTasks;
