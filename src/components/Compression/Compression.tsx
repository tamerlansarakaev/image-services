// Global
import React from 'react';
import { ReactSVG } from 'react-svg';

// Styles
import styles from './Compression.module.scss';

// Icon
import FileIcon from '../Main/assets/fileUpload.svg';

// Other
import ImageInput from '../UI/ImageInput/ImageInput';
import { IKContext } from 'imagekitio-react';
import { config } from '../../api';
import ImageKit from 'imagekit';
import { useAppDispatch, useAppSelector } from '../../redux/config';
import {
  uploadImage,
  uploadingImage,
} from '../../redux/reducers/globalReducer';
import { useNavigate } from 'react-router';

const imageKit = new ImageKit({
  privateKey: config.privateKey,
  publicKey: config.publicKey,
  urlEndpoint: config.urlEndpoint,
});

const fileRef = React.createRef<HTMLInputElement>();

export default function Compression() {
  const [file, setFile] = React.useState<File | null>(null);
  const state = useAppSelector((state) => state.rootReducer.globalReducer);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleUploadImage = async (image: File) => {
    if (image) {
      dispatch(uploadingImage({}));
      imageKit
        .upload({
          file: image,
          fileName: image.name,
        })
        .then(async (state) => {
          if (!fileRef.current) return;
          dispatch(uploadImage({ image: state }));
          fileRef.current.value = '';
          setFile(null);
          navigate(`/result`);
        });
    }
  };

  const validateInputFile = state.loading
    ? 'Loading...'
    : file && file.name.length
    ? file.name
    : file && !file.name.length
    ? 'Превышает лимит файла'
    : 'Выбрать файл';

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
    </IKContext>
  );
}
