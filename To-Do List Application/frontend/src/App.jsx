import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:3700/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!task.trim()) return;
    await axios.post("http://localhost:3700/api/add", { text: task });
    setTask("");
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      
      {/* Card */}
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          📝 To-Do App
        </h1>

        {/* Input Section */}
        <div className="flex gap-2 mb-4">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your task..."
          />
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="max-h-80 overflow-y-auto">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500 mt-4">
              No tasks yet 🚀
            </p>
          ) : (
            <ul className="space-y-3">
              {tasks.map((t) => (
                <li
                  key={t._id}
                  className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <span className="text-gray-700">{t.text}</span>
                  
                  {/* Optional icon */}
                  <span className="text-sm text-gray-400">
                    ✔
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
