import styles from './Main.module.scss';

interface IMain {
  children: React.ReactNode;
}

export default function Main({ children }: IMain) {
  return (
    <>
      <div className={styles.main}>{children}</div>
    </>
  );
}
