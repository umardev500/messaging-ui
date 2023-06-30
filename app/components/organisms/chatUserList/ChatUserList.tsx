import { ChatUserListing } from '@app/components/molecules';
import { Chat } from '@app/types';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';

const data: Chat[] = [
  {
    participants: [
      {
        id: 1667987323,
        name: 'Steven',
        picture: {
          avatar: 'url',
          real: 'url',
        },
      },
      {
        id: 1667987322,
        name: 'Mark',
        picture: {
          avatar: 'url',
          real: 'url',
        },
      },
    ],
    accepted: true,
    currentMessage: {
      id: 1,
      sender: 1667987323,
      recipient: 1778782723,
      text: 'Hello',
      read: false,
    },
  },
];

export const ChatUserList: React.FC = () => {
  const renderItem = useCallback((info: ListRenderItemInfo<Chat>) => {
    return <ChatUserListing chat={info.item} avatar={require('@assets/images/avatars/avatar-4.png')} />;
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
