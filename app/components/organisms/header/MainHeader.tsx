import { SettingOutline } from '@app/components/atoms';
import { colors } from '@app/constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MainHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Hello Fateme</Text>
        <SettingOutline />
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
    fontSize: 22,
    fontWeight: '500',
    color: colors.gray[900],
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
