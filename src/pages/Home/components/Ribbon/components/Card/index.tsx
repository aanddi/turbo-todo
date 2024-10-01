import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './CardTodo.module.scss';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { todoStore } from '@/store/todo';
import { ITodo } from '@/store/todo/types';
import { observer } from 'mobx-react-lite';

interface ICardTodo {
  data: ITodo;
}

const CardTodo = observer(({ data }: ICardTodo) => {
  const handleToggleDone = (date: string) => {
    todoStore.toggleDone(date);
  };

  const handleDelete = (date: string) => {
    todoStore.delete(date);
  };

  return (
    <div key={data.date} className={styles.card}>
      <div className={styles.content}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Checkbox checked={data.isDone} onChange={() => handleToggleDone(data.date)} />
          <p className={`${styles.todo} ${data.isDone && styles.crossed}`}>{data.title}</p>
        </Stack>
        <div>
          <IconButton color="error" aria-label="delete" onClick={() => handleDelete(data.date)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
});

export default CardTodo;
