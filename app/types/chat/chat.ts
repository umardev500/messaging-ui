export interface Message {
  id: number;
  userId: number;
  attachment?: string;
  text?: string;
  createdAt: number;
}

export interface Chat {
  users: number[];
  messages: Message[];
}
