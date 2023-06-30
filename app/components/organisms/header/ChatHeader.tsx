import { Avatar, Name, Text } from '@app/components/atoms';
import { colors } from '@app/constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const ChatHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Avatar source={require('@assets/images/avatars/avatar-4.png')} />
        <View style={styles.userInfo}>
          <Name>Shawn Jones</Name>
          <Text color={colors.gray[400]}>Online</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  userInfo: {
    gap: 2,
  },
});
