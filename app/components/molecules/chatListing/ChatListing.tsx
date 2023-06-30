import { Text } from '@app/components/atoms';
import { colors } from '@app/constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const ROUNDED_RADIUS = 14;
const PADDING = 16;

export const ChatListing: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text size={16} color={colors.gray[600]}>
        Hey there, do you need any help?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: PADDING,
    borderTopRightRadius: ROUNDED_RADIUS,
    borderBottomRightRadius: ROUNDED_RADIUS,
    borderBottomLeftRadius: ROUNDED_RADIUS,
  },
});
