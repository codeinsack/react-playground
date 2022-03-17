import "./TodoList.css";
import { useCallback, useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import { generateId } from "../../../utils/generateId";
import Image from "../../../components/Image/Image";

const todoList = [
  {
    id: generateId(),
    name: "Learn JavaScript",
    completed: false,
  },
  {
    id: generateId(),
    name: "Learn HTML",
    completed: false,
  },
  {
    id: generateId(),
    name: "Learn CSS",
    completed: false,
  },
  {
    id: generateId(),
    name: "Learn React",
    completed: false,
  },
  {
    id: generateId(),
    name: "Learn Webpack",
    completed: false,
  },
];

const TodoList = () => {
  const [itemName, setItemName] = useState("");
  const [list, setList] = useState(todoList);
  const [imageUrl, setImageUrl] = useState("");

  useState(() => {
    setImageUrl("https://picsum.photos/200");
  });

  const onItemUpdate = useCallback((checked, targetId) => {
    const updateItem = (prevList) =>
      prevList.map((item) => {
        if (item.id === targetId) {
          return {
            ...item,
            completed: checked,
          };
        }
        return item;
      });

    setList((prevState) => updateItem(prevState));
  }, []);

  const onItemDelete = useCallback((targetId) => {
    const filterList = (prevList) =>
      prevList.filter((item) => item.id !== targetId);
    setList((prevState) => filterList(prevState));
  }, []);

  const onItemNameChange = (newName) => {
    setItemName(newName);
  };

  const onNewItemSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: generateId(),
      name: itemName,
      completed: false,
    };
    const updatedList = list.concat(newItem);
    setList(updatedList);
    setItemName("");
  };

  return (
    <div className="todo-list">
      <form className="todo-list__form" onSubmit={onNewItemSubmit}>
        <input
          value={itemName}
          type="text"
          onChange={(event) => onItemNameChange(event.target.value)}
        />
        <button>Add</button>
      </form>
      <div className="todo-list__items">
        {list.map((item) => (
          <TodoItem
            key={item.id}
            data={item}
            onItemUpdate={onItemUpdate}
            onItemDelete={onItemDelete}
          />
        ))}
      </div>
      <Image url={imageUrl} />
    </div>
  );
};

export default TodoList;
