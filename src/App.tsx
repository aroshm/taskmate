import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Counter/Counter";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const info: string = "Random";

  return (
    <>
      <Header />
      <Counter />
      <TaskList info={info} />
      <Footer />
    </>
  );
}

export default App;
