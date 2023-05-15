// Global
import React from 'react';
import { ReactSVG } from 'react-svg';

// Styles
import styles from './Compression.module.scss';

// Components
import ImageInput from '../UI/ImageInput/ImageInput';
import { IKContext } from 'imagekitio-react';
import ImageKit from 'imagekit';

// Icon
import FileIcon from '../Main/assets/fileUpload.svg';

// Other
import { config } from '../../api';
import { useAppDispatch, useAppSelector } from '../../redux/config';
import {
  uploadImage,
  uploadingImage,
} from '../../redux/reducers/globalReducer';
import { useNavigate } from 'react-router';
import Modal from '../Modal/Modal';

const imageKit = new ImageKit({
  privateKey: config.privateKey,
  publicKey: config.publicKey,
  urlEndpoint: config.urlEndpoint,
});

const fileRef = React.createRef<HTMLInputElement>();

export default function Compression() {
  const [file, setFile] = React.useState<File | null>(null);
  const [urlImage, setUrlImage] = React.useState<string>();
  const [statusModal, setStatusModal] = React.useState<boolean>(false);
  const state = useAppSelector((state) => state.rootReducer.globalReducer);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleUploadImage = async (image: File) => {
    if (image) {
      setUrlImage(URL.createObjectURL(image));
    }
  };

  const validateInputFile = state.loading
    ? 'Loading...'
    : file && file.name.length
    ? file.name
    : file && !file.name.length
    ? 'Превышает лимит файла'
    : 'Выбрать файл';

  React.useEffect(() => {
    if (file && urlImage && file.size < 25165824) {
      dispatch(uploadingImage({}));
      imageKit
        .upload({
          file: file,
          fileName: file.name,
        })
        .then(async (state) => {
          if (!fileRef.current) return;
          dispatch(uploadImage({ image: state, beforeImage: urlImage }));
          fileRef.current.value = '';
          setFile(null);
          navigate(`/photo-comressor/result`);
        });
    } else if (file && file?.size > 25165824) {
      if (!fileRef.current) return;
      fileRef.current.value = '';
      setStatusModal(true);
      setFile(null)
    }
  }, [urlImage]);

  return (
    <IKContext publicKey={config.publicKey} urlEndpoint={config.urlEndpoint}>
      <form className={styles.form}>
        <h1 className={styles.formTitle}>Сжать фото</h1>
        <label htmlFor="fileInput" className={styles.formInput}>
          <div className={styles.formGroup}>
            <span className={styles.formInputTitle}>{validateInputFile}</span>
            <ImageInput
              id="fileInput"
              ref={fileRef}
              fileName={file && file.name}
              onChange={(e) => e.target.files && setFile(e.target.files[0])}
            />
          </div>
          <div className={styles.formGroup}>
            <span className={styles.formFileTypesTitle}>JPG,WEBP</span>
            <ReactSVG src={FileIcon} />
          </div>
        </label>
        <button
          className={styles.formSubmitButton}
          disabled={state.loading}
          onClick={(e) => {
            if (file) {
              handleUploadImage(file);
            }
            e.preventDefault();
          }}
        >
          {state.loading ? 'Загрузка...' : 'Подтвердить'}
        </button>
      </form>
      <Modal open={statusModal} onClose={() => setStatusModal(false)}>
        <div className={styles.modal}>
          <h1 className={styles.modalTitle}>Максимальный размер файла: 25MB</h1>
          <button
            className={styles.modalButton}
            onClick={() => setStatusModal(false)}
          >
            Закрыть
          </button>
        </div>
      </Modal>
    </IKContext>
  );
}
