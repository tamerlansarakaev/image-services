import Compression from '../../components/Compression/Compression';
import Main from '../../components/Main/Main';

// Styles
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <Main>
        <Compression />
      </Main>
    </div>
  );
}
