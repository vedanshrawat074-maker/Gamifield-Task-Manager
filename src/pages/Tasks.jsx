import { useState, useEffect } from "react";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";

function Tasks() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);
  const [xp, setXP] = useState(() => JSON.parse(localStorage.getItem("xp")) || 0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("xp", JSON.stringify(xp));
  }, [xp]);

  const level = Math.floor(xp / 100) + 1;
  const progress = xp % 100;

  return (
    <div>
      <h1 className="text-3xl mb-4">📝 Tasks</h1>

      <div className="mb-4">
        🎮 Level {level} — ⚡ {xp} XP
        <div className="w-full bg-gray-700 h-3 rounded mt-2">
          <div className="bg-blue-500 h-3 rounded" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} setXP={setXP} />
    </div>
  );
}

export default Tasks;