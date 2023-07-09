import { Search } from '@app/components/molecules';
import { colors } from '@app/constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const CallsHeader: React.FC = () => {
  const searchChangeHandler = (text: string) => {
    console.log(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Calls</Text>
      </View>
      <View style={styles.bottom}>
        <Search onChange={searchChangeHandler} />
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
  bottom: {
    marginTop: 24,
  },
});
