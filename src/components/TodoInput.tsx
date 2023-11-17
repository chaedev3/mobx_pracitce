import useStore from "../stores/useStore";
import { useState } from "react";

export default function TodoInput() {
  const { todo } = useStore();
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      todo.addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>ADD!</button>
      </div>
    </div>
  );
}
