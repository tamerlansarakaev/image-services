// Global
import React from 'react';
import { useNavigate } from 'react-router';

// Config
import { config } from '../../api';

// Styles
import styles from './Compressored.module.scss';
import { useAppSelector } from '../../redux/config';

// Components
import Modal from '../../components/Modal/Modal';
import Image from '../../components/UI/Image/Image';

// Utils
import { calculateFizeSize, getImage, giveFormatFile } from '../../utils';

const Compressored: React.FC = () => {
  const [beforeSizeImage, setBeforeSizeImage] = React.useState<string>();
  const [afterSizeImage, setAfterSizeImage] = React.useState<string>();
  const [loadingImage, setLoadingImage] = React.useState(true);

  const state = useAppSelector((state) => state.rootReducer.globalReducer);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!state.image) {
      navigate('/image-services/image-compressor');
    }

    if (state.image) {
      setBeforeSizeImage(calculateFizeSize(state.image));
      const response = async () => {
        if (!state.image) return;

        const response = await getImage(state.image.url);
        return response;
      };
      response().then((state) => {
        if (!state?.data.size) return;

        setAfterSizeImage(calculateFizeSize(state?.data));
      });
    }
  }, [state]);

  return (
    <div className={styles.main}>
      {state.image ? (
        <>
          <div className={styles.imageGroup}>
            {state.beforeImage && (
              <div className={styles.image}>
                <img src={state.beforeImage} />
                <span className={styles.imageSize}>
                  До:{' '}
                  {beforeSizeImage && beforeSizeImage.length
                    ? beforeSizeImage
                    : '0KB'}
                </span>
              </div>
            )}

            <Image
              path={state.image.filePath}
              urlEndpoint={config.urlEndpoint}
              className={styles.image}
              onLoad={() => setLoadingImage(!loadingImage)}
            >
              <span className={styles.imageSize}>
                После: {afterSizeImage?.length ? afterSizeImage : `0KB`}
              </span>
            </Image>
          </div>

          <div className={styles.buttonGroup}>
            <button
              className={styles.canselButton}
              onClick={() => navigate('/image-services/compressor')}
            >
              Вернуться
            </button>
            <button className={styles.confirmButton}>
              <a
                href={`${config.urlEndpoint}/tr:lo-true,f-${giveFormatFile(
                  state.image
                )}/${state.image.filePath}?ik-attachment=true`}
              >
                скачать
              </a>
            </button>
          </div>
        </>
      ) : (
        ''
      )}

      <Modal open={loadingImage} className={styles.modal}>
        <h1>Загрузка...</h1>
      </Modal>
    </div>
  );
};

export default Compressored;
