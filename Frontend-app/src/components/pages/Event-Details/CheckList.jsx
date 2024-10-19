import React, { useState } from 'react';

const Checklist = ({ onClose }) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  // Function to toggle the completion status of a task
  const toggleTaskCompletion = (index) => {
    setTasks(tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t)));
  };

  // Function to remove a task from the checklist
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl min-h-[80vh] relative">
        <h2 className="text-2xl font-bold mb-6 text-center">Event Checklist</h2>

        {/* Add Task Section */}
        <div className="mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
          />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full"
            onClick={addTask}
            disabled={!task}
          >
            Add Task
          </button>
        </div>

        {/* Task List Display */}
        <div className="bg-gray-100 p-4 rounded-lg h-[500px] overflow-y-auto">
          <h3 className="font-medium text-lg mb-4">Your Tasks</h3>
          {tasks.length > 0 ? (
            <ul className="space-y-3">
              {tasks.map((task, index) => (
                <li key={index} className={`flex justify-between items-center p-2 rounded-lg shadow-sm ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(index)}
                      className="mr-2"
                    />
                    <span className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
                      {task.text}
                    </span>
                  </div>
                  <button
                    className="bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-700"
                    onClick={() => removeTask(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No tasks added yet.</p>
          )}
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Checklist;
