import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../typography';
import { colors } from '@app/constants';

const BADGE_SIZE = 20;

interface Props {
  bg?: string;
  size?: number;
}

export const BadgeCounter: React.FC<Props> = ({ bg = colors.red[500], size = BADGE_SIZE }) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: bg,
        },
      ]}>
      <Text color="white" size={12}>
        1
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
