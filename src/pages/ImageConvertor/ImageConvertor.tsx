import React from 'react';
import { ReactSVG } from 'react-svg';
import { useAppDispatch, useAppSelector } from '../../redux/config';
import { fileUpload } from '../../utils';
import { config } from '../../api';

// Components
import Main from '../../components/Main/Main';
import FormFile from '../../components/UI/FormFile/FormFile';
import { IKContext } from 'imagekitio-react';

// Styles
import styles from './ImageConvert.module.scss';

// Icons
import DownloadIcon from '../../assets/components icons/download.svg';

const ImageConvertor = () => {
  const [file, setFile] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  const fileRef = React.useRef(null);
  const state = useAppSelector((state) => state.rootReducer.globalReducer);
  const dispatch = useAppDispatch();

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    dispatch(await fileUpload({ file }));
  };

  function changeButtons() {
    if (!state) return;
    if (state.uploadFile) {
      return styles.activeButton;
    } else {
      return styles.button;
    }
  }

  function changeActions() {
    if (state.uploadFile) {
      return (
        <>
          <a
            className={styles.download}
            href={`${config.urlEndpoint}/tr:f-png/${state.uploadFile.filePath}?ik-attachment=true`}
          ></a>
          <ReactSVG src={DownloadIcon} className={styles.successIcon} />
        </>
      );
    } else {
      return <ReactSVG src={DownloadIcon} />;
    }
  }

  React.useEffect(() => {
    if (state && state.type === 'File Upload') {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [state]);

  return (
    <IKContext publicKey={config.publicKey} urlEndpoint={config.urlEndpoint}>
      <Main>
        <FormFile
          title="конвертировать в png"
          titleInput={
            loading ? 'Загрузка...' : file?.name ? file.name : 'Выбрать файл'
          }
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
          onSubmit={(e) => {
            handlerSubmit(e);
          }}
          formatsFile="jpg,jpeg"
          file={file}
          ref={fileRef}
          button={{
            disabled: loading,
            text: changeActions(),
            className: changeButtons(),
          }}
        />
      </Main>
    </IKContext>
  );
};

export default ImageConvertor;
