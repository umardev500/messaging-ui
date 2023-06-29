import { colors } from '@app/constants';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

interface Props {
  size?: number;
  dot?: boolean;
  source: ImageSourcePropType;
}

const DOT_SIZE = 14;

export const Avatar: React.FC<Props> = ({ size = 60, dot = false, source }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={[
          styles.avatar,
          {
            width: size,
            height: size,
          },
        ]}
        source={source}
      />
      {dot ? <View style={styles.dot} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.gray[100],
  },
  avatar: {},
  dot: {
    position: 'absolute',
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: colors.green[500],
    bottom: 2,
    right: 0,
    borderWidth: 2,
    borderColor: colors.white,
  },
});
