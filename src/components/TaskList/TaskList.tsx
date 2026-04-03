import "./TaskList.scss";
import { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";

interface Task {
  id: number;
  taskName: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  const handleDelete = (taskToDelete: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete);

    setTasks(updatedTasks);
  };

  const [show, setShow] = useState(true);

  return (
    <section className="tasklist">
      <ul>
        <div className="header">
          <h1>TaskList</h1>
          <button className="trigger" onClick={() => setShow(!show)}>
            {show ? "Hide Tasks" : "Show Tasks"}
          </button>
        </div>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
