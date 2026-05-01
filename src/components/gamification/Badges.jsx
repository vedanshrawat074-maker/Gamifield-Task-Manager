function Badges({ tasks }) {
  const completedCount = tasks.filter((t) => t.completed).length;

  const badges = [];

  if (completedCount >= 5) {
    badges.push({ name: "Beginner", color: "bg-green-400" });
  }
  if (completedCount >= 15) {
    badges.push({ name: "Intermediate", color: "bg-blue-400" });
  }
  if (completedCount >= 30) {
    badges.push({ name: "Pro", color: "bg-purple-500" });
  }

  return (
    <div className="mt-4">
      <h3 className="font-semibold text-gray-700 mb-2">🏆 Badges</h3>

      {badges.length === 0 ? (
        <p className="text-gray-400 text-sm">No badges yet</p>
      ) : (
        <div className="flex gap-2 flex-wrap">
          {badges.map((badge, index) => (
            <span
              key={index}
              className={`${badge.color} text-white px-3 py-1 rounded-full text-sm`}
            >
              {badge.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Badges;   // ✅ THIS LINE IS REQUIRED