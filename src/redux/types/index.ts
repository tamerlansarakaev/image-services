import { ResponseFile } from '../../types/globalTypes';

export const types = {
  uploadLoading: 'image/upload/loading',
  uploadImage: 'image/upload/successful',
  sizeResultImage: 'image/save/sizeAfterImage',
};

interface ILink {
  title: string;
  src: string;
  image: string;
}

export interface IGlobalReducer {
  loading?: boolean;
  type?: string;
  beforeImage?: string | null;
  size?: Array<string>;
  links?: ILink[];
  image?: ResponseFile | null;
}

export interface IRootReducer {
  globalReducer: IGlobalReducer;
}
