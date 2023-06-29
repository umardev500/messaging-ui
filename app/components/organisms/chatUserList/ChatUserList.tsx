import { ChatUserListing } from '@app/components/molecules';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const ChatUserList: React.FC = () => {
  return (
    <View style={styles.container}>
      <ChatUserListing
        name="Shawn Jones"
        text="Oh, thanks so much!"
        time="09:38 AM"
        avatar={require('@assets/images/avatars/avatar-4.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingVertical: 24,
  },
});
