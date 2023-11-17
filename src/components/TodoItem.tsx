import useStore from "../stores/useStore";
import { TodoSingle } from "../stores/todo";
import { observer } from "mobx-react-lite";
import { FiDelete } from "react-icons/fi";

interface todoItem {
  item: TodoSingle;
}

const TodoItem = observer(({ item }: todoItem) => {
  const { todo } = useStore();
  const removeItem = () => {
    todo.removeTodo(item.id);
  };

  const doneTodo = () => {
    todo.doneTodo(item.id);
  };

  return (
    <div className="item-box">
      <input
        className="check-box"
        type="checkbox"
        onChange={() => doneTodo()}
        checked={item.isDone}
      />
      <p className={`content ${item.isDone ? "done" : ""}`}>{item.content}</p>

      <FiDelete className="delete-btn" onClick={removeItem} />
    </div>
  );
});

export default TodoItem;
