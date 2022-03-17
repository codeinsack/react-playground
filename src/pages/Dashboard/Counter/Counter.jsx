import "./Counter.css";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useActions";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const { increment, decrement, reset } = useActions();

  return (
    <div className="counter">
      <div>{value}</div>
      <div className="counter__buttons">
        <button onClick={() => increment(1)}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => increment(2)}>Double</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
