import { ChatUserListing } from '@app/components/molecules';
import { Chat } from '@app/types';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';

const data: Chat[] = [
  {
    users: [1, 2],
    messages: [
      {
        id: 1,
        userId: 2,
        text: 'Oh, thanks so much!',
        createdAt: 16827999823,
      },
    ],
  },
  {
    users: [1, 2],
    messages: [
      {
        id: 1,
        userId: 2,
        text: 'Oh, thanks so much!',
        createdAt: 168279998231,
      },
    ],
  },
];

export const ChatUserList: React.FC = () => {
  const renderItem = useCallback((info: ListRenderItemInfo<Chat>) => {
    const { messages } = info.item;
    const messagesLength = messages.length - 1;
    const lastMessage = messages[messagesLength];

    return (
      <ChatUserListing
        name="Shawn Jones"
        text={lastMessage.text}
        time={info.index !== 1 ? '08:15 AM' : '08:12 AM'}
        avatar={require('@assets/images/avatars/avatar-4.png')}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingVertical: 16,
  },
});
