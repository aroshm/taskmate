import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Counter from "./components/Counter/Counter";
import TaskList from "./components/TaskList/TaskList";
import AddTask from "./components/AddTask/AddTask";
import { useState } from "react";

function App() {
  interface Task {
    id: number;
    taskName: string;
    completed: boolean;
  }

  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <Header />
      {/* <Counter /> */}
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>

      <Footer />
    </>
  );
}

export default App;
