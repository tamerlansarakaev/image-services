import React, { forwardRef } from 'react';
import { ReactSVG } from 'react-svg';
import { IFormFileComponent } from '../../../types/globalTypes';

// Icons
import FileIcon from '../../Main/assets/fileUpload.svg';

// Components
import ImageInput from '../ImageInput/ImageInput';

import styles from './FormFile.module.scss';

const FormFile: React.FC<IFormFileComponent> = forwardRef(
  (
    {
      titleInput,
      formatsFile,
      title,
      button,
      onChange,
      file,
      onSubmit,
      className,
    },
    ref
  ) => {
    return (
      <form className={className ? className : styles.form} onSubmit={onSubmit}>
        <h1 className={styles.formTitle}>{title}</h1>
        <label htmlFor="fileInput" className={styles.formInput}>
          <div className={styles.formGroup}>
            <span className={styles.formInputTitle}>{titleInput}</span>
            <ImageInput
              id="fileInput"
              ref={ref}
              fileName={file && file.name}
              onChange={onChange}
            />
          </div>
          <div className={styles.formGroup}>
            <span className={styles.formFileTypesTitle}>{formatsFile}</span>
            <ReactSVG src={FileIcon} />
          </div>
        </label>
        <button
          disabled={button && button.disabled}
          className={
            button && button.className
              ? button.className
              : styles.formSubmitButton
          }
        >
          {button && button.text ? button.text : 'Подтвердить'}
        </button>
      </form>
    );
  }
);

export default FormFile;
