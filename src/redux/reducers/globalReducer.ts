import { createReducer, createAction } from '@reduxjs/toolkit';
import { IGlobalReducer, types } from '../types';
import { defaultLinks } from '../../default/defaultLinks';

const initialState: IGlobalReducer = {
  loading: false,
  image: null,
  beforeImage: null,
  size: ['', ''],
  links: [],
  uploadFile: null,
  type: '',
};

export const uploadingImage = createAction<IGlobalReducer>(types.uploadLoading);
export const uploadImage = createAction<IGlobalReducer>(types.uploadImage);
export const saveSizeAfterImage = createAction<IGlobalReducer>(
  types.sizeResultImage
);

export const startLoading = createAction<IGlobalReducer>(types.startLoading);
export const endLoading = createAction<IGlobalReducer>(types.endLoading);

export const uploadFile = createAction<IGlobalReducer>(types.uploadFile);

export const globalReducer = createReducer(initialState, (builder) => {
  builder.addCase(uploadingImage, (state, action) => {
    state.type = action.type;
    state.loading = true;
  });
  builder
    .addCase(uploadImage, (state, action) => {
      state.loading = false;
      state.type = action.type;
      state.image = action.payload.image;
      state.beforeImage = action.payload.beforeImage;
    })
    .addCase(saveSizeAfterImage, (state, action) => {
      state.type = action.type;
      state.size = action.payload.size;
    })
    .addCase(uploadFile, (state, action) => {
      state.uploadFile = action.payload.uploadFile;
    })
    .addCase(startLoading, (state, action) => {
      state.type = action.payload.type;
      state.loading = true;
    })
    .addCase(endLoading, (state) => {
      state.type = '';
      state.loading = false;
    })

    .addDefaultCase((state) => {
      state.links = defaultLinks;
    });
});
