import { ChatUserListing } from '@app/components/molecules';
import { Chat } from '@app/types';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';

const data: Chat[] = [
  {
    id: 1,
    participants: [
      {
        id: 1966,
        name: 'Sarah Jhonson',
        picture: {
          avatar: require('@assets/images/avatars/avatar.png'),
          real: require('@assets/images/avatars/avatar.png'),
        },
      },
      {
        id: 1982,
        name: 'Mark',
        picture: {
          avatar: require('@assets/images/avatars/avatar-4.png'),
          real: require('@assets/images/avatars/avatar-4.png'),
        },
      },
    ],
    accepted: true,
    currentMessage: {
      id: 1,
      sender: 1667987323,
      text: 'Oh, Thanks so much!',
      read: false,
    },
  },
  {
    id: 2,
    participants: [
      {
        id: 1966,
        name: 'Shawn Jones',
        picture: {
          avatar: require('@assets/images/avatars/avatar-4.png'),
          real: require('@assets/images/avatars/avatar-4.png'),
        },
      },
      {
        id: 1982,
        name: 'Mark',
        picture: {
          avatar: require('@assets/images/avatars/avatar-4.png'),
          real: require('@assets/images/avatars/avatar-4.png'),
        },
      },
    ],
    accepted: true,
    currentMessage: {
      id: 1,
      sender: 1667987323,
      text: 'See you tomorrow then we can',
      read: true,
    },
  },
  {
    id: 3,
    participants: [
      {
        id: 1966,
        name: 'Bessie Cooper',
        picture: {
          avatar: require('@assets/images/avatars/avatar-5.png'),
          real: require('@assets/images/avatars/avatar-5.png'),
        },
      },
      {
        id: 1982,
        name: 'Mark',
        picture: {
          avatar: require('@assets/images/avatars/avatar-4.png'),
          real: require('@assets/images/avatars/avatar-4.png'),
        },
      },
    ],
    accepted: true,
    currentMessage: {
      id: 1,
      sender: 1667987323,
      text: 'Hahaha',
      read: true,
    },
  },
];

export const ChatUserList: React.FC = () => {
  const renderItem = useCallback((info: ListRenderItemInfo<Chat>) => {
    return <ChatUserListing chat={info.item} />;
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
