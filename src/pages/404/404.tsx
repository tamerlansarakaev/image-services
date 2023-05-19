import Main from '../../components/Main/Main';

import styles from './404.module.scss';

import { useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Main>
      <div className={styles.container}>
        <h1 className={styles.title}>Page Not Found</h1>
        <button onClick={() => navigate('/image-services/')} className={styles.button}>
          Return
        </button>
      </div>
    </Main>
  );
}
