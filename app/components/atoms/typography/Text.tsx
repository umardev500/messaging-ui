import { colors } from '@app/constants';
import { FontWeight } from '@app/types';
import React, { ReactNode } from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';

interface Props extends Omit<TextProps, 'style'> {
  children?: ReactNode;
  size?: number;
  color?: string;
  weight?: FontWeight;
}

export const Text: React.FC<Props> = ({ children, size = 14, color = colors.gray[600], weight = '400', ...props }) => {
  return (
    <RNText
      style={[
        styles.text,
        {
          fontSize: size,
          color,
          fontWeight: weight,
        },
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
