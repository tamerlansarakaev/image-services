import { UploadResponse } from 'imagekit/dist/libs/interfaces';

export interface ResponseFile extends UploadResponse {
  name: string;
}
