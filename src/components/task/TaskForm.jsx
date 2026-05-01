import { useState } from "react";

function TaskForm({ tasks, setTasks }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      desc,
      difficulty,
      dueDate,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setDesc("");
    setDifficulty("easy");
    setDueDate("");
  };

  return (
    <div className="bg-[#1e293b] p-4 rounded mb-4">

      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 mb-2 bg-gray-700 rounded" />

      <textarea placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} className="w-full p-2 mb-2 bg-gray-700 rounded" />

      <div className="flex gap-2 mb-2">
        <select value={difficulty} onChange={e => setDifficulty(e.target.value)} className="bg-gray-700 p-2 rounded">
          <option value="easy">🟢 Easy</option>
          <option value="medium">🟡 Medium</option>
          <option value="hard">🔴 Hard</option>
        </select>

        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className="bg-gray-700 p-2 rounded" />
      </div>

      <button onClick={handleAdd} className="bg-blue-500 px-4 py-2 rounded">
        Add Task
      </button>

    </div>
  );
}

export default TaskForm;