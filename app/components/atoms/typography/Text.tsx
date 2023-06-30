import { colors } from '@app/constants';
import { FontWeight } from '@app/types';
import React, { ReactNode } from 'react';
import { Text as RNText, StyleProp, StyleSheet, TextProps, TextStyle } from 'react-native';

interface Props extends Omit<TextProps, 'style'> {
  children?: ReactNode;
  size?: number;
  color?: string;
  weight?: FontWeight;
  style?: StyleProp<TextStyle>;
}

export const Text: React.FC<Props> = ({
  children,
  size = 14,
  color = colors.gray[600],
  weight = '400',
  style,
  ...props
}) => {
  return (
    <RNText
      style={[
        styles.text,
        {
          fontSize: size,
          color,
          fontWeight: weight,
        },
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '500',
  },
});
