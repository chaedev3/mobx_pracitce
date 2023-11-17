import "../css/Todo.scss";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import TodoNum from "./TodoNum";
import ToggleButton from "./ToggleButton";

export default function Todo() {
  return (
    <div className="TodoContainer">
      <div className="Todo">
        <div className="todo-list">
          <TodoList />
        </div>
        <div className="todo-add">
          <h1 className="title">MobX Todo List!</h1>
          <TodoInput />
          <TodoNum />
          <ToggleButton />
        </div>
      </div>
    </div>
  );
}
