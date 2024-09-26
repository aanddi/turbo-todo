import { useState } from "react";

import styles from "./App.module.scss";

export const App = () => {
   const [count, setCount] = useState(0);
   return (
      <div className={styles.root}>
         <div className={styles.count}>{count}</div>
         <div className={styles.buttons}>
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            <button onClick={() => setCount((prev) => prev - 1)}>-</button>
         </div>
      </div>
   );
};
