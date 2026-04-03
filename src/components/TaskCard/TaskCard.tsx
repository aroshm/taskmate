import "./TaskCard.scss";

interface Task {
  id: number;
  taskName: string;
  completed: boolean;
}

interface TaskCardProps {
  task: Task;
  handleDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, handleDelete }) => {
  return (
    <div className="taskcard">
      <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
        <span>
          {task.id} - {task.taskName}
        </span>
        <button className="delete" onClick={() => handleDelete(task.id)}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default TaskCard;
