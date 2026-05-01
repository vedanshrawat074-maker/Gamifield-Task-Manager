import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4 flex justify-between">
      <h1 className="font-bold">🎮 Task App</h1>

      <div className="flex gap-4 text-sm">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/stats">Stats</Link>
      </div>
    </div>
  );
}

export default Navbar;