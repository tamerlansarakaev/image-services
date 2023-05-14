import { IKImage } from 'imagekitio-react';
import React from 'react';

interface IImage {
  children?: React.ReactNode;
  path: string;
  className?: string;
  urlEndpoint: string;
}

const Image: React.FC<IImage> = ({
  children,
  path,
  className,
  urlEndpoint,
}) => {
  return (
    <>
      <div className={className}>
        <IKImage path={path} urlEndpoint={urlEndpoint} />
        {children}
      </div>
    </>
  );
};

export default Image;
