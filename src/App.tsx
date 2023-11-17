import Todo from "./components/Todo";
import { observer } from "mobx-react-lite";
import useStore from "./stores/useStore";
import "./css/App.scss";

const App = observer(() => {
  const { theme } = useStore();
  console.log(theme.currentTheme);
  return (
    <div className={`App ${theme.currentTheme}`}>
      <Todo />
    </div>
  );
});

export default App;
