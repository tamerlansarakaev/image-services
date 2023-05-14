import React from 'react';
import { IKUpload } from 'imagekitio-react';

interface IImageInput {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  className?: string;
  fileName?: string | null;
  styles?: React.CSSProperties;
  value?: string | number | readonly string[] | undefined;
}

const ImageInput = React.forwardRef(
  (
    { onChange, className, id, fileName, styles, value }: IImageInput,
    ref: any
  ) => {
    return (
      <IKUpload
        style={styles ? styles : { visibility: 'hidden', display: 'none' }}
        className={className ? className : ''}
        fileName={fileName}
        accept="image/jpeg,image/webp"
        value={value}
        inputRef={ref}
        id={id}
        onChange={onChange}
      />
    );
  }
);

export default ImageInput;
