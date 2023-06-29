import { colors } from '@app/constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MainHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Hello Fateme</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.gray[600],
  },
});
