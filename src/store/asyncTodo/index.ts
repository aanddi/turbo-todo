import axiosInstance from '@/common/api/instance';
import { makeAutoObservable, runInAction } from 'mobx';
import { IAsyncTodo } from './types';

class AsyncTodoStore {
  listTodos: IAsyncTodo[] = [];
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getTodos() {
    try {
      this.isLoading = true;
      const response = await axiosInstance.get('/todos');

      runInAction(() => {
        this.listTodos = [...response.data];
        this.isLoading = false;
      });
    } catch (e) {
      console.log(e);
      this.isLoading = false;
    }
  }
}

export const asyncTodoStore = new AsyncTodoStore();
