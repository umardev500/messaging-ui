import { Modify } from '../meta';

export interface Creds {
  username: string;
  password: string;
}

export interface UserPicture {
  avatar: string;
  read: string;
  real: string;
}

export interface User {
  id: number;
  creds: Creds;
  name: string;
  picture: UserPicture;
  modify: Modify;
}
