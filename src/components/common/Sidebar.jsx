import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-[#020617] border-r border-gray-800 p-6 flex flex-col gap-4">

      <h1 className="text-xl font-bold text-blue-400 mb-4">
        🎮 Task App
      </h1>

      <NavLink
        to="/"
        className={({ isActive }) =>
          `p-2 rounded transition ${
            isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-800 text-gray-300"
          }`
        }
      >
        🏠 Home
      </NavLink>

      <NavLink
        to="/tasks"
        className={({ isActive }) =>
          `p-2 rounded transition ${
            isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-800 text-gray-300"
          }`
        }
      >
        📝 Tasks
      </NavLink>

      <NavLink
        to="/achievements"
        className={({ isActive }) =>
          `p-2 rounded transition ${
            isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-800 text-gray-300"
          }`
        }
      >
        🏆 Achievements
      </NavLink>

    </div>
  );
}

export default Sidebar;