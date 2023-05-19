import { useNavigate } from 'react-router';

// Styles
import styles from './Home.module.scss';

// Icons
import ImageCompressorIcon from '../../components/Card/icons/Image Compressor.jpeg';

// Components
import Card from '../../components/Card/Card';
import Main from '../../components/Main/Main';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <div className={styles.main}>
        <Card
          imageUrl={ImageCompressorIcon}
          title="Image compressor"
          button={{
            children: 'Перейти',
            onClick() {
              navigate('/image-services/image-compressor');
            },
          }}
        />
      </div>
    </Main>
  );
};

export default Home;
