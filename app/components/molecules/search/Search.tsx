import { SearchOutline } from '@app/components/atoms';
import { colors } from '@app/constants';
import { useDebounce } from '@app/hooks';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface Props {
  onChange?: (text: string) => void;
  delay?: number;
}

export const Search: React.FC<Props> = ({ onChange, delay }) => {
  const handler = useDebounce(onChange, delay);

  return (
    <View style={styles.container}>
      <SearchOutline color={colors.gray[500]} />
      <TextInput onChange={handler} style={styles.input} placeholder="Type a name" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[50],
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    paddingLeft: 8,
    fontSize: 16,
    color: colors.gray[600],
    height: 50,
  },
});
