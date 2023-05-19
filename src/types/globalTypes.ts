import { UploadResponse } from 'imagekit/dist/libs/interfaces';

export interface ResponseFile extends UploadResponse {
  name: string;
}

export interface IFormFileComponent {
  titleInput?: string;
  formatsFile?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  button?: {
    text?: string | React.ReactNode;
    className?: string;
    disabled?: boolean;
  };
  file: File | null;
  ref?: any;
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}
