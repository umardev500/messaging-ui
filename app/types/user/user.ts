import { ImageSourcePropType } from 'react-native';
import { Modify } from '../meta';

export interface Creds {
  username: string;
  password: string;
}

export interface UserPicture {
  avatar: ImageSourcePropType;
  real: ImageSourcePropType;
}

export interface User {
  id: number;
  creds: Creds;
  name: string;
  picture: UserPicture;
  modify: Modify;
}

// user calls
export interface UserCalls extends Omit<User, 'creds' | 'modify'> {}
