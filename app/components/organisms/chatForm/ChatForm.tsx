import { PaperPlaneOutline } from '@app/components/atoms';
import { colors } from '@app/constants';
import React, { useRef } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from 'react-native';

export const ChatForm: React.FC = () => {
  const inputRef = useRef<TextInput>(null);

  const handleTyping = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    console.log(JSON.stringify(e.nativeEvent.text));
  };

  const handleSubmit = () => {
    inputRef.current?.clear();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChange={handleTyping} ref={inputRef} multiline style={styles.input} placeholder="Message" />
        <TouchableOpacity onPress={handleSubmit}>
          <PaperPlaneOutline />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  input: {
    flex: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: colors.gray[600],
    fontSize: 16,
    backgroundColor: colors.gray[50],
    maxHeight: 80,
  },
});
