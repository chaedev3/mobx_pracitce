import TodoItem from "./TodoItem";
import { observer } from "mobx-react-lite";
import useStore from "../stores/useStore";

const TodoList = observer(() => {
  const {
    todo: { todoList },
  } = useStore();

  return (
    <div>
      {todoList.map((todo) => (
        <TodoItem item={todo} key={todo.id} />
      ))}
    </div>
  );
});

export default TodoList;
