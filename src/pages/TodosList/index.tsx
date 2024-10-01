import { asyncTodoStore } from '@/store/asyncTodo';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Stack from '@mui/material/Stack';

import styles from './TodosList.module.scss';

const TodosList = observer(() => {
  React.useEffect(() => {
    asyncTodoStore.getTodos();
  }, []);

  console.log('render 1');

  if (asyncTodoStore.isLoading) {
    return <div>Загрузка</div>;
  }

  if (!asyncTodoStore.isLoading) {
    return (
      <div className={styles.items}>
        {asyncTodoStore.listTodos.map((todo) => {
          return (
            <div key={todo.id} className={styles.item}>
              <input checked={todo.completed} type="checkbox" readOnly />
              <span>{todo.title}</span>
            </div>
          );
        })}
      </div>
    );
  }
});

export default TodosList;
