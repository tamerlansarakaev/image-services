interface IConfigApi {
  publicKey: string;
  privateKey: string;
  urlEndpoint: string;
}

const urlEndpoint = 'https://ik.imagekit.io/tamerlan011104';

const publicKey = 'public_awndq/DVOiAdmi5s+eO9pIenpcQ=';
const privateKey = 'private_fuWgK+N0KGeV0lRzjxrVqpJEvBE=';

export const config: IConfigApi = {
  publicKey,
  privateKey,
  urlEndpoint,
};
