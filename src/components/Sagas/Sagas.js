import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../../redux-store/action-types";
import { useEffect } from "react";

const Sagas = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entries);

  console.log("entries", entries);

  useEffect(() => {
    dispatch({ type: ActionType.GET_ENTRIES });
  }, [dispatch]);

  return <div>Hello World!</div>;
};

export default Sagas;
