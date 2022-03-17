import TodoList from "./TodoList/TodoList";
import Counter from "./Counter/Counter";
import Countries from "../../components/Countries/Countries";

const Dashboard = () => {
  return (
    <div>
      <TodoList />
      <hr />
      <Counter />
      <hr />
      <Countries />
    </div>
  );
};

export default Dashboard;
