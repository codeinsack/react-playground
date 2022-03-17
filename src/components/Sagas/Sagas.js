import { useDispatch } from "react-redux";

const Sagas = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "TEST_MESSAGE" })}>Take</button>
    </div>
  );
};

export default Sagas;
