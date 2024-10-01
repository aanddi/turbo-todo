import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.menu}>
            <Link to={'/'} className={styles.link}>Главная</Link>
            <Link to={'/todos'} className={styles.link}>Тест</Link>
          </nav>
        </div>
      </header>
      <main>
        <div className={styles.container}>
          <div className={styles.page}>{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
