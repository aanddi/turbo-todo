import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { todoStore } from '@/store/todo';
import { MdAdd } from 'react-icons/md';
import Stack from '@mui/material/Stack';

const Add = React.memo(() => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    todoStore.add({ title: newTodo });
    setNewTodo('');
  };

  return (
    <Stack direction="row" spacing={3}>
      <TextField
        fullWidth
        label="Заголовок"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button
        disabled={!newTodo}
        size="large"
        onClick={handleAddTodo}
        startIcon={<MdAdd />}
        variant="contained"
      >
        Добавить
      </Button>
    </Stack>
  );
});

export default Add;
