import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Alert from "@mui/material/Alert";
import styles from "./Home.module.scss";
import { MdAdd } from "react-icons/md";
import { observer } from "mobx-react-lite";
import { todoStore } from "@/store/todo";
import { useState } from "react";
import ModalAdd from "./components/modal";

const Home = observer(() => {
   const [openModal, setOpenModal] = useState(false);

   return (
      <div className={styles.home}>
         <ModalAdd open={openModal} setOpen={setOpenModal} />
         <div className={styles.conteiner}>
            <div className={styles.header}>
               <Typography variant="h5" gutterBottom>
                  todo
               </Typography>
               <Button
                  onClick={() => setOpenModal(true)}
                  startIcon={<MdAdd />}
                  variant="contained"
               />
            </div>
            <div className={styles.content}>
               {todoStore.todos.length === 0 && (
                  <Alert variant="outlined" severity="info">
                     У вас нет todo
                  </Alert>
               )}
               {todoStore.todos.map((todo) => {
                  return (
                     <Card key={todo.date.toString()} className={styles.card}>
                        <CardContent>
                           <Typography gutterBottom>{todo.title}</Typography>
                           <p>{todo.desc}</p>
                        </CardContent>
                     </Card>
                  );
               })}
            </div>
         </div>
      </div>
   );
});

export default Home;
