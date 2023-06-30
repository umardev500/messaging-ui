import { colors } from '@app/constants';
import * as React from 'react';
import { Path, Svg } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const CamSolid: React.FC<Props> = ({ color = colors.gray[600], size = 24 }) => (
  <Svg width={size} height={size} fill={color} stroke={color} strokeWidth={1.5} viewBox="0 0 24 24">
    <Path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5zm15.44 14.25-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
  </Svg>
);
