import { colors } from '@app/constants';
import * as React from 'react';
import { Path, Svg } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const SearchOutline: React.FC<Props> = ({ color = colors.gray[600], size = 24 }) => (
  <Svg width={size} height={size} fill="none" stroke={color} strokeWidth={1.5} viewBox="0 0 24 24">
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
    />
  </Svg>
);
