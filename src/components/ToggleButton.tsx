import useStore from "../stores/useStore";

export default function ToggleButton() {
  const { theme } = useStore();

  const changeTheme = () => {
    theme.toggleTheme();
  };
  return (
    <div>
      <button onClick={changeTheme}>Toggle</button>
    </div>
  );
}
