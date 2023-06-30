export interface ChatRoomStackParams {
  id: number;
}

export type RootStackParamList = {
  MainStack: undefined;
  ChatRoomStack: ChatRoomStackParams;
};
