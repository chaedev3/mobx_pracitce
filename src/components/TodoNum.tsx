import useStore from "../stores/useStore";
import { observer } from "mobx-react-lite";

const TodoNum = observer(() => {
  const { todo } = useStore();
  const doneNum = todo.getDoneNum;
  const notDoneNum = todo.getNotDoneNum;
  return (
    <div>
      <p>완료: {doneNum}개</p>
      <p>미완료: {notDoneNum}개</p>
    </div>
  );
});

export default TodoNum;
