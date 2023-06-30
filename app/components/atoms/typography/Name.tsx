import React, { ReactNode } from 'react';
import { Text } from './Text';

interface Props {
  children?: ReactNode;
}

export const Name: React.FC<Props> = ({ children }) => {
  return (
    <Text size={16} weight="500" numberOfLines={1}>
      {children}
    </Text>
  );
};
