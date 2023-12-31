import { ChatForm, ChatHeader, ChatList } from '@app/components/organisms';
import { colors } from '@app/constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const ChatRoomPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <ChatHeader />
      <ChatList />
      <ChatForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
