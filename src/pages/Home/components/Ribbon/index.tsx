import React from 'react';
import { todoStore } from '@/store/todo';
import CardTodo from './components/Card';
import { observer } from 'mobx-react-lite';
import Alert from '@mui/material/Alert';
import styles from './Ribbon.module.scss';

const Ribbon = observer(() => {
  if (todoStore.getTodos.length === 0) {
    return (
      <div className={styles.ribbon}>
        <Alert variant="outlined" severity="info">
          Todo не найдены
        </Alert>
      </div>
    );
  }

  if (todoStore.getTodos.length > 0) {
    return (
      <div className={styles.ribbon}>
        {todoStore.getTodos.map((todo) => (
          <CardTodo key={todo.date} data={todo} />
        ))}
      </div>
    );
  }
});

export default Ribbon;
