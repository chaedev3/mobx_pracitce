import { observable } from "mobx";

// Todo type 지정
export interface TodoSingle {
  id: number;
  content: string;
  isDone: boolean;
}

interface Todo {
  // state
  todoList: TodoSingle[];
  currentId: number;
  // action
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
  doneTodo: (id: number) => void;
  // computed
  getDoneNum: number;
  getNotDoneNum: number;
}

export const todo = observable<Todo>({
  todoList: [
    { id: 0, content: "mobX 공부하기", isDone: false },
    {
      id: 1,
      content: "react Deep Dive 책 읽기",
      isDone: true,
    },
    {
      id: 2,
      content: "js Deep Dive 책 읽기",
      isDone: false,
    },
    {
      id: 3,
      content: "project 코드 분석",
      isDone: false,
    },
    { id: 4, content: "todo 실습", isDone: false },
  ],
  currentId: 5,
  addTodo(content) {
    this.todoList.push({
      id: this.currentId,
      content,
      isDone: false,
    });
    this.currentId++;
  },
  removeTodo(id) {
    const index = this.todoList.findIndex((todo: TodoSingle) => todo.id === id);
    if (id !== -1) {
      this.todoList.splice(index, 1);
    }
  },
  doneTodo(id) {
    const index = this.todoList.findIndex((todo: TodoSingle) => todo.id === id);
    this.todoList[index].isDone = !this.todoList[index].isDone;
  },

  get getDoneNum() {
    return this.todoList.filter((todo: TodoSingle) => todo.isDone).length;
  },
  get getNotDoneNum() {
    return this.todoList.filter((todo: TodoSingle) => !todo.isDone).length;
  },
});
