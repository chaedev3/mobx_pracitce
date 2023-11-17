import { observable } from "mobx";

export type ThemeType = "light" | "dark";

interface ThemeStore {
  currentTheme: ThemeType;
  toggleTheme: () => void;
}

export const theme = observable<ThemeStore>({
  currentTheme: "light",
  toggleTheme() {
    this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
  },
});
