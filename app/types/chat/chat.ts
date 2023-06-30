import { Modify } from '../meta';
import { User } from '../user';

export interface Message {
  id: number;
  sender: number;
  recipient: number;
  attachment?: string;
  text?: string;
  read: boolean;
  modify?: Modify;
}

export interface ChatUser extends Omit<User, 'creds' | 'modify'> {}

export interface Chat {
  participants: ChatUser[];
  accepted?: boolean;
  currentMessage: Message;
}
