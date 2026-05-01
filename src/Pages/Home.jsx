import { useEffect, useState } from "react";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [xp, setXP] = useState(0);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
    setXP(JSON.parse(localStorage.getItem("xp")) || 0);
  }, []);

  const completed = tasks.filter(t => t.completed).length;
  const level = Math.floor(xp / 100) + 1;
  const progress = xp % 100;

  let badge = "🟢 Beginner Explorer";
  if (level === 2) badge = "🔵 Rising Warrior";
  if (level >= 3) badge = "🟣 Elite Master";

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-blue-400">
        👋 Welcome Back
      </h1>

      <p className="text-gray-400 mb-6">
        Keep leveling up 🚀
      </p>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-[#1e293b] p-4 rounded-xl text-center">
          ⚡ XP <br /> {xp}
        </div>
        <div className="bg-[#1e293b] p-4 rounded-xl text-center">
          ✅ Done <br /> {completed}
        </div>
        <div className="bg-[#1e293b] p-4 rounded-xl text-center">
          🔥 Streak <br /> 1
        </div>
      </div>

      {/* LEVEL */}
      <div className="bg-[#1e293b] p-6 rounded-xl mb-6">
        <div className="flex items-center gap-6">

          <div className="w-28 h-28 rounded-full border-[8px] border-blue-500 flex items-center justify-center">
            Lv {level}
          </div>

          <div className="flex-1">
            <div className="w-full bg-gray-700 rounded h-4">
              <div
                className="bg-blue-500 h-4 rounded"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm mt-1">{progress}%</p>
          </div>

        </div>
      </div>

      {/* BADGE */}
      <div className="bg-[#1e293b] p-4 rounded-xl">
        🏆 {badge}
      </div>
    </div>
  );
}

export default Home;