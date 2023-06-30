import { ChatListing } from '@app/components/molecules';
import { colors } from '@app/constants';
import { Message } from '@app/types';
import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const ID = 1982;

export const ChatList: React.FC = () => {
  const [data] = useState<Message[]>([
    {
      id: 1,
      sender: 1667987323,
      text: 'See you tomorrow then we can',
      read: true,
    },
    {
      id: 2,
      sender: ID,
      text: 'See you tomorrow then we can',
      read: true,
    },
  ]);

  const renderItem = useCallback(() => {
    return <ChatListing />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[300],
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
