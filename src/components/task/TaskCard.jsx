function TaskCard({ task, tasks, setTasks, setXP }) {

  const getXP = () => {
    if (task.difficulty === "easy") return 10;
    if (task.difficulty === "medium") return 20;
    return 30;
  };

  const completeTask = () => {
    if (task.completed) return;

    const updated = tasks.map(t =>
      t.id === task.id ? { ...t, completed: true } : t
    );

    setTasks(updated);
    setXP(prev => prev + getXP());
  };

  const deleteTask = () => {
    setTasks(tasks.filter(t => t.id !== task.id));
  };

  return (
    <div className="bg-[#1e293b] p-4 rounded mb-2 flex justify-between">

      <div>
        <h2>{task.completed ? "✅" : "📝"} {task.title}</h2>
        <p className="text-gray-400 text-sm">{task.desc}</p>

        <div className="text-xs mt-1">
          {task.difficulty === "easy" && "🟢 Easy"}
          {task.difficulty === "medium" && "🟡 Medium"}
          {task.difficulty === "hard" && "🔴 Hard"}
          {task.dueDate && ` 📅 ${task.dueDate}`}
        </div>
      </div>

      <div className="flex gap-2">
        <button onClick={completeTask} className="bg-green-500 px-2 rounded">✔</button>
        <button onClick={deleteTask} className="bg-red-500 px-2 rounded">✕</button>
      </div>

    </div>
  );
}

export default TaskCard;