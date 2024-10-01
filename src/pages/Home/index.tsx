import Stack from '@mui/material/Stack';
import Add from './components/Add';
import SelectShow from './components/SelectShow';
import Ribbon from './components/Ribbon';

const Home = () => {
  return (
    <>
      <Stack spacing={3}>
        <Add />
        <SelectShow />
      </Stack>
      <Ribbon />
    </>
  );
};

export default Home;
