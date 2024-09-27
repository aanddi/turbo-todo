import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import { todoStore } from "@/store/todo";

import styles from "./Modal.module.scss";

interface IModal {
   open: boolean;
   setOpen: (state: boolean) => void;
}

interface IForm {
   title: string;
   desc: string;
}

const ModalAdd = ({ open, setOpen }: IModal) => {
   const {
      control,
      handleSubmit,
      reset,
      formState: { isValid },
   } = useForm<IForm>();

   const handleAddTodo = (data: IForm) => {
      todoStore.add(data);
      setOpen(false);
      reset();
   };

   return (
      <Dialog open={open} onClose={() => setOpen(false)}>
         <DialogTitle>Добавление todo</DialogTitle>
         <DialogContent className={styles.content}>
            <form
               onSubmit={handleSubmit(handleAddTodo)}
               className={styles.form}
            >
               <Controller
                  name="title"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                     <TextField
                        label="Заголовок"
                        variant="standard"
                        {...field}
                     />
                  )}
               />
               <Controller
                  name="desc"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                     <TextField
                        label="Описание"
                        variant="standard"
                        multiline
                        {...field}
                     />
                  )}
               />
            </form>
         </DialogContent>
         <DialogActions>
            <Button disabled={!isValid} onClick={handleSubmit(handleAddTodo)}>
               Добавить
            </Button>
            <Button onClick={() => setOpen(false)}>Отменить</Button>
         </DialogActions>
      </Dialog>
   );
};

export default ModalAdd;
