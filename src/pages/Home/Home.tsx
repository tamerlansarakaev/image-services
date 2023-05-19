import { useNavigate } from 'react-router';
import { useAppSelector } from '../../redux/config';

// Styles
import styles from './Home.module.scss';

// Components
import Card from '../../components/Card/Card';
import Main from '../../components/Main/Main';

const Home = () => {
  const navigate = useNavigate();
  const links = useAppSelector(
    (state) => state.rootReducer.globalReducer.links
  );

  return (
    <Main>
      <div className={styles.main}>
        {links &&
          links.map((state, i) => (
            <Card
              imageUrl={state.image}
              key={i}
              title={state.title}
              button={{
                children: 'Перейти',
                onClick() {
                  navigate(state.src);
                },
              }}
            />
          ))}
      </div>
    </Main>
  );
};

export default Home;
