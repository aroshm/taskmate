import { useState } from "react";
import "./AddTask.scss";

interface Task {
  id: number;
  taskName: string;
  completed: boolean;
}

interface AddTaskProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const AddTask: React.FC<AddTaskProps> = ({ tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskValue(event.target.value);
  };

  const reset = () => {
    setTaskValue("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskValue.trim() === "") return;
    const newId =
      tasks.length === 0 ? 1 : Math.max(...tasks.map((task) => task.id)) + 1;
    const newTask = {
      id: newId,
      taskName: taskValue,
      completed: progress,
    };
    setTasks([...tasks, newTask]);
    reset();
  };
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          onChange={handleChange}
          value={taskValue}
        />
        <select
          onChange={(event) => setProgress(event.target.value === "true")}
        >
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button type="submit">Add Task</button>
        <span className="reset" onClick={reset}>
          Reset
        </span>
      </form>
      <p className="text-center">{taskValue}</p>
    </section>
  );
};

export default AddTask;
