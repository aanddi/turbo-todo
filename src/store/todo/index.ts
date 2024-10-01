import { makeAutoObservable } from 'mobx';
import dayjs from 'dayjs';
import { ITodo, Show, TodoPayload } from './types';

class TodoStore {
  todos: ITodo[] = [];
  show: Show = 'all';

  constructor() {
    makeAutoObservable(this);
  }

  toggleShow(showType: string) {
    this.show = showType as Show;
  }

  get getTodos() {
    return this.todos
      .slice()
      .sort((a, b) => (dayjs(a.date).isBefore(b.date) ? 1 : -1))
      .filter((todo) => {
        if (this.show === 'all') return true;
        if (this.show === 'done') return todo.isDone;
        if (this.show === 'noneDone') return !todo.isDone;
      });
  }

  add(payload: TodoPayload) {
    const newTodo = {
      title: payload.title,
      isDone: false,
      date: dayjs().toString(),
    };
    this.todos.push(newTodo);
  }

  delete(date: string) {
    this.todos = this.todos.filter((todo) => todo.date !== date);
  }

  toggleDone(date: string) {
    const indexElem = this.todos.findIndex((todo) => todo.date === date);
    const stateElem = this.todos[indexElem].isDone;
    this.todos[indexElem].isDone = !stateElem;
  }
}

export const todoStore = new TodoStore();
