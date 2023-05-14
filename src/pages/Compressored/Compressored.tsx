// Global
import React from 'react';
import { useNavigate } from 'react-router';

// Config
import { config } from '../../api';

// Styles
import styles from './Compressored.module.scss';
import { useAppSelector } from '../../redux/config';

// Components
import Image from '../../components/UI/Image/Image';

const Compressored: React.FC = () => {
  const [beforeSizeImage, setBeforeSizeImage] = React.useState<string>();

  const state = useAppSelector((state) => state.rootReducer.globalReducer);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!state.image) {
      navigate('/');
    }

    if (state.image) {
      const toMB: number = state.image.size / 1048576;
      const resultSize = Math.round(toMB * 10) / 10;
      let afterSize;

      if (resultSize >= 1) {
        afterSize = `${resultSize}MB`;

        return setBeforeSizeImage(afterSize);
      } else {
        const result = state.image.size / 1024;
        const fixSize = parseFloat(result.toFixed(1));

        return setBeforeSizeImage(`${fixSize}KB`);
      }
    }
  }, [state]);

  return (
    <div className={styles.main}>
      {state.image ? (
        <>
          <div className={styles.imageGroup}>
            <Image
              className={styles.image}
              urlEndpoint={config.urlEndpoint}
              path={state.image.filePath}
            >
              <span className={styles.imageSize}>
                Before:{' '}
                {beforeSizeImage && beforeSizeImage.length
                  ? beforeSizeImage
                  : '0KB'}
              </span>
            </Image>

            <Image
              path={`tr:lo-false/${state.image.filePath}`}
              urlEndpoint={config.urlEndpoint}
              className={styles.image}
            >
              <span className={styles.imageSize}>After: </span>
            </Image>
          </div>

          <button className={styles.confirmButton}>
            <a
              href={`${config.urlEndpoint}/tr:lo-true/${state.image.filePath}?ik-attachment=true`}
            >
              скачать
            </a>
          </button>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Compressored;
