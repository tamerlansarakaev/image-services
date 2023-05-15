import { ResponseFile } from '../types/globalTypes';
import axios from 'axios';

export const imageSave = async (file: Blob) => {
  const reader = new FileReader();
  reader.onload = () => {
    if (reader.readyState === 2) {
      return reader.result;
    }
  };

  reader.readAsDataURL(file);
};

export const calculateFizeSize = (state: ResponseFile) => {
  let afterSize;

  const toMB: number = state.size / 1048576;
  const resultSize = Math.round(toMB * 10) / 10;
  if (resultSize >= 1) {
    afterSize = `${resultSize}MB`;

    return afterSize;
  } else {
    const result = state.size / 1024;
    const fixSize = parseFloat(result.toFixed(1));
    return `${fixSize}KB`;
  }
};

export const getImage = async (url: string) => {
  if (!url) return;
  const response = await axios.get(url, {
    responseType: 'blob',
  });
  return response;
};

export const searchType = (file: File) => {
  const validateType = ['image/jpeg', 'image/webp', 'image/jpg'];
  const findIndex = validateType.findIndex((state) => {
    return state === file.type;
  });

  return findIndex;
};
