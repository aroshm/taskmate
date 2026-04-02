import "./TaskList.scss";
import { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import BoxCardAlert from "../BoxCardAlert/BoxCardAlert";

interface TaskListProps {
  info: string
}

const TaskList = ({info}: TaskListProps) => {
  const [tasks, setTasks] = useState([
    { id: 1, taskName: "Typescript lecture", completed: true, info },
    { id: 2, taskName: "React lecture", completed: false, info },
    { id: 3, taskName: "React job", completed: false, info },
  ]);
  const handleDelete = (taskToDelete: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete);

    setTasks(updatedTasks);
  };

  return (
    <section className="tasklist">
      <h1 style={{color: 'red'}}>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </ul>

      <BoxCardAlert status="success">
        <p className="title">Lorem, ipsum.</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, nemo?
        </p>
      </BoxCardAlert>
      <BoxCardAlert status="warning">
        <p className="title">Lorem, ipsum dolor.</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime non
          unde obcaecati, ad eius voluptatibus!
        </p>
      </BoxCardAlert>
      <BoxCardAlert status="alert">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          quisquam autem quae aut ullam in saepe necessitatibus libero error!
          Laboriosam.
        </p>
      </BoxCardAlert>
    </section>
  );
};

export default TaskList;
