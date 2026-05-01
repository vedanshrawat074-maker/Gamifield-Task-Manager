import TaskCard from "./TaskCard";

function TaskList({ tasks, setTasks, setXP }) {
  return (
    <div>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} tasks={tasks} setTasks={setTasks} setXP={setXP} />
      ))}
    </div>
  );
}

export default TaskList;