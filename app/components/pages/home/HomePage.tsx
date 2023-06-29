import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

export const HomePage: React.FC = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={styles.container} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
