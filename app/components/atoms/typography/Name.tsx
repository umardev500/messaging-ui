import { colors } from '@app/constants';
import React, { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
  children?: ReactNode;
}

export const Name: React.FC<Props> = ({ children }) => {
  return (
    <Text numberOfLines={1} style={styles.text}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.gray[600],
  },
});
