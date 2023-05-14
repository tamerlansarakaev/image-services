import { ResponseFile } from '../../types/globalTypes';

export const types = {
  uploadLoading: 'image/upload/loading',
  uploadImage: 'image/upload/successful',
  sizeResultImage: 'image/save/sizeAfterImage',
};

export interface IGlobalReducer {
  loading?: boolean;
  type?: string;
  beforeImage?: string | null;
  size?: Array<string>;
  image?: ResponseFile | null;
}

export interface IRootReducer {
  globalReducer: IGlobalReducer;
}
