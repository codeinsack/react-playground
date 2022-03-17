import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ data, onItemUpdate, onItemDelete }) => {
  console.log(`Item ID: ${data.id}`);

  return (
    <div className="todo-item">
      <label htmlFor={data.id}>{data.name}</label>
      <input
        id={data.id}
        value={data.completed}
        type="checkbox"
        onChange={(event) => onItemUpdate(event.target.checked, data.id)}
      />
      <button onClick={() => onItemDelete(data.id)}>Delete</button>
    </div>
  );
};

export default memo(TodoItem);
