import { colors } from '@app/constants';
import * as React from 'react';
import { Path, Svg } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const PaperPlaneOutline: React.FC<Props> = ({ color = colors.gray[600], size = 24 }) => (
  <Svg width={size} height={size} fill="none" stroke={color} strokeWidth={1.5} viewBox="0 0 24 24">
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12zm0 0h7.5"
    />
  </Svg>
);
