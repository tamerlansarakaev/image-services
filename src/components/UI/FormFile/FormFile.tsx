import React from 'react';
import { ReactSVG } from 'react-svg';

// Icons
import FileIcon from '../../Main/assets/fileUpload.svg';

// Components
import ImageInput from '../ImageInput/ImageInput';

import styles from './FormFile.module.scss';
import Main from '../../Main/Main';

interface IFormFile {
  titleInput?: string;
  formatsFile?: string;
  title: string;
}

const FormFile: React.FC<IFormFile> = ({ titleInput, formatsFile, title }) => {
  const [file, setFile] = React.useState<File | null>(null);
  const fileRef = React.useRef(null);
  return (
    <Main>
      <form className={styles.form}>
        <h1 className={styles.formTitle}>{title}</h1>
        <label htmlFor="fileInput" className={styles.formInput}>
          <div className={styles.formGroup}>
            <span className={styles.formInputTitle}>{titleInput}</span>
            <ImageInput
              id="fileInput"
              ref={fileRef}
              fileName={file && file.name}
              onChange={(e) => e.target.files && setFile(e.target.files[0])}
            />
          </div>
          <div className={styles.formGroup}>
            <span className={styles.formFileTypesTitle}>{formatsFile}</span>
            <ReactSVG src={FileIcon} />
          </div>
        </label>
        <button className={styles.formSubmitButton}>Text</button>
      </form>
    </Main>
  );
};

export default FormFile;
