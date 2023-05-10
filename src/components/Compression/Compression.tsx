import React from 'react';
import styles from './Compression.module.scss';
import { ReactSVG } from 'react-svg';
import FileIcon from '../Main/assets/fileUpload.svg';

export default function Compression() {
  const [file, setFile] = React.useState<any>();

  React.useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <form className={styles.form}>
      <h1 className={styles.formTitle}>Сжать фото</h1>
      <label htmlFor="fileInput" className={styles.formInput}>
        <div className={styles.formGroup}>
          <span className={styles.formInputTitle}>
            {file ? file.name : 'Выбрать файл'}
          </span>
          <input
            id="fileInput"
            type="file"
            onChange={(e) => {
              e.target.files && setFile(e.target.files[0]);
            }}
            style={{ visibility: 'hidden', display: 'none' }}
            accept="image/png, image/jpeg"
          />
        </div>
        <div className={styles.formGroup}>
          <span className={styles.formFileTypesTitle}>JPG,PNG</span>
          <ReactSVG src={FileIcon} />
        </div>
      </label>
      <button
        className={styles.formSubmitButton}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Подтвердить
      </button>
    </form>
  );
}
