import { IKImage } from 'imagekitio-react';
import React from 'react';

interface IImage {
  children?: React.ReactNode;
  path: string;
  className?: string;
  onLoad?: () => void;
  urlEndpoint: string;
}

const Image: React.FC<IImage> = ({
  children,
  path,
  className,
  urlEndpoint,
  onLoad,
}) => {
  return (
    <>
      <div className={className}>
        <IKImage path={path} urlEndpoint={urlEndpoint} onLoad={onLoad} />
        {children}
      </div>
    </>
  );
};

export default Image;
