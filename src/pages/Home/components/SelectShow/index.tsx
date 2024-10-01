import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { todoStore } from '@/store/todo';

const SelectShow = React.memo(() => {
  const [sorted, setSorted] = useState<string>('all');

  const handleShow = (e: SelectChangeEvent) => {
    setSorted(e.target.value as string);
    todoStore.toggleShow(e.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="show-select-label">Показать</InputLabel>
        <Select
          label="Показать"
          onChange={handleShow}
          defaultValue="all"
          labelId="show-select-label"
          id="show-select-label"
        >
          <MenuItem value={'all'}>все</MenuItem>
          <MenuItem value={'done'}>выполненые</MenuItem>
          <MenuItem value={'noneDone'}>не выполненые</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
});

export default SelectShow;
