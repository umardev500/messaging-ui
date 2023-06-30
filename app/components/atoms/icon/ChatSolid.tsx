import { colors } from '@app/constants';
import * as React from 'react';
import { View } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const ChatSolid: React.FC<Props> = ({ color = colors.gray[600], size = 24 }) => (
  <View>
    <Svg width={size} height={size} fill={color} stroke={color} strokeWidth={1.5} viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997z"
        clipRule="evenodd"
      />
    </Svg>
  </View>
);
