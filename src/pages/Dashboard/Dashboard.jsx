import TodoList from "./TodoList/TodoList";
import Counter from "./Counter/Counter";
import Countries from "../../components/Countries/Countries";
import Sagas from "../../components/Sagas/Sagas";

const Dashboard = () => {
  return (
    <div>
      <Sagas />
      <hr />
      <TodoList />
      <hr />
      <Counter />
      <hr />
      <Countries />
    </div>
  );
};

export default Dashboard;
