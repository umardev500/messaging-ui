import { CallsListing } from '@app/components/molecules';
import { User, UserCalls } from '@app/types';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';

const data: Omit<User, 'creds' | 'modify'>[] = [
  {
    id: 1,
    name: 'Shawn Jones',
    picture: {
      avatar: require('@assets/images/avatars/avatar-4.png'),
      real: require('@assets/images/avatars/avatar-4.png'),
    },
  },
];

export const CallsList: React.FC = () => {
  const renderItem = useCallback((info: ListRenderItemInfo<UserCalls>) => {
    return <CallsListing user={info.item} />;
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
  },
});
