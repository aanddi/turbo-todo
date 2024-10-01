interface ITodo {
  title: string;
  isDone: boolean;
  date: string;
}

type TodoPayload = Pick<ITodo, 'title'>;

type Show = 'all' | 'done' | 'noneDone';

export type { ITodo, TodoPayload, Show };
