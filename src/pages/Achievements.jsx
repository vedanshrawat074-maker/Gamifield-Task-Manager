import { useEffect, useState } from "react";

function Achievements() {
  const [tasks, setTasks] = useState([]);
  const [xp, setXP] = useState(0);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const savedXP = JSON.parse(localStorage.getItem("xp")) || 0;

    setTasks(savedTasks);
    setXP(savedXP);
  }, []);

  const completed = tasks.filter(t => t.completed).length;
  const level = Math.floor(xp / 100) + 1;

  // 🏆 ACHIEVEMENTS LIST
  const achievements = [
    // TASK BASED
    { title: "First Blood", desc: "Complete 1 task", icon: "🗡️", unlocked: completed >= 1 },
    { title: "Task Hunter", desc: "Complete 10 tasks", icon: "🏹", unlocked: completed >= 10 },
    { title: "Grinder", desc: "Complete 25 tasks", icon: "⚔️", unlocked: completed >= 25 },
    { title: "Task Master", desc: "Complete 50 tasks", icon: "🛡️", unlocked: completed >= 50 },

    // LEVEL BASED
    { title: "Level Up", desc: "Reach Level 2", icon: "🎮", unlocked: level >= 2 },
    { title: "Rising Star", desc: "Reach Level 5", icon: "🚀", unlocked: level >= 5 },
    { title: "Legend", desc: "Reach Level 10", icon: "🌟", unlocked: level >= 10 },

    // STREAK (temporary logic)
    { title: "Getting Started", desc: "Complete 3 tasks", icon: "🔥", unlocked: completed >= 3 },
    { title: "On Fire", desc: "Complete 7 tasks", icon: "🔥🔥", unlocked: completed >= 7 },
    { title: "Unstoppable", desc: "Complete 15 tasks", icon: "🔥🔥🔥", unlocked: completed >= 15 },

    // FUN
    { title: "Perfectionist", desc: "Complete all tasks", icon: "🎯", unlocked: completed === tasks.length && tasks.length > 0 },
    { title: "Speed Runner", desc: "Complete 5 tasks", icon: "⚡", unlocked: completed >= 5 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-purple-400">
        🏆 Achievements
      </h1>

      <p className="text-gray-400 mb-6">
        Unlock achievements by completing tasks and leveling up 🎮
      </p>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {achievements.map((a, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl transition transform hover:scale-105 ${
              a.unlocked
                ? "bg-[#1e293b] shadow-lg border border-gray-700"
                : "bg-gray-700 opacity-40"
            }`}
          >
            <div className="text-3xl mb-2">{a.icon}</div>

            <h2 className="font-semibold">{a.title}</h2>
            <p className="text-sm text-gray-400">{a.desc}</p>

            <p className="mt-2 text-sm">
              {a.unlocked ? "✅ Unlocked" : "🔒 Locked"}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Achievements;