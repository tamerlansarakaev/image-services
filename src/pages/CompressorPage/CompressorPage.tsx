import Compression from '../../components/Compression/Compression';
import Main from '../../components/Main/Main';

// Styles
import styles from './CompressorPage.module.scss';

export default function CompressorPage() {
  return (
    <div className={styles.main}>
      <Main>
        <Compression />
      </Main>
    </div>
  );
}
