import { useEffect, useState } from "react";

function Stats() {
  const [tasks, setTasks] = useState([]);
  const [xp, setXP] = useState(0);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    const savedXP = localStorage.getItem("xp");

    if (savedTasks) setTasks(JSON.parse(savedTasks));
    if (savedXP) setXP(JSON.parse(savedXP));
  }, []);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">📊 Your Stats</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded">
          Total Tasks: {total}
        </div>

        <div className="p-4 bg-gray-100 rounded">
          Completed: {completed}
        </div>

        <div className="p-4 bg-gray-100 rounded">
          Pending: {pending}
        </div>

        <div className="p-4 bg-gray-100 rounded">
          Completion: {percentage}%
        </div>

        <div className="p-4 bg-gray-100 rounded col-span-2">
          XP: {xp}
        </div>
      </div>
    </div>
  );
}

export default Stats;