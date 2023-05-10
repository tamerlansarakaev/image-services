import styles from './Main.module.scss';
import Compression from '../Compression/Compression';

export default function Main() {
  return (
    <>
      <div className={styles.main}>
        <Compression />
      </div>
    </>
  );
}
