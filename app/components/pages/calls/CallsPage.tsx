import { CallsHeader } from '@app/components/organisms';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const CallsPage: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <CallsHeader />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
