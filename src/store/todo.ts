import { makeAutoObservable } from "mobx";

interface ITodo {
   title: string;
   desc: string;
   date: Date;
}

type ITodoPayload = Pick<ITodo, "title" | "desc">;

class TodoStore {
   todos: ITodo[] = [];

   constructor() {
      makeAutoObservable(this);
   }

   add(payload: ITodoPayload) {
      const newTodo = {
         title: payload.title,
         desc: payload.desc,
         date: new Date(),
      };

      this.todos.push(newTodo)
   }
}

export const todoStore = new TodoStore();
