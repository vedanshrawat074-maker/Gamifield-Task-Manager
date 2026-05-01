import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Achievements from "./pages/Achievements";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white">
        
        <Sidebar />

        <div className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;