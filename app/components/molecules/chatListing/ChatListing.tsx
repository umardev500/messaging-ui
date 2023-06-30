import { Text } from '@app/components/atoms';
import { colors } from '@app/constants';
import { Message } from '@app/types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const ROUNDED_RADIUS = 14;
const PADDING = 16;
const TIME_PADDING = 10;

interface Props {
  message: Message;
  userId: number;
  index: number;
}

export const ChatListing: React.FC<Props> = ({ message, userId }) => {
  const mySelf = message.sender === userId;

  return (
    <View style={[styles.container, mySelf ? styles.containerSelf : styles.containerForeign]}>
      <View>
        <View style={[styles.inner, mySelf ? styles.innerSelf : styles.innerForeign]}>
          <Text size={16} color={mySelf ? colors.white : colors.gray[600]}>
            {message.text}
          </Text>
        </View>
        <Text style={[styles.time, mySelf ? styles.timeSelf : styles.timeForeign]} size={14} color={colors.gray[400]}>
          09:32
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  containerForeign: {
    justifyContent: 'flex-start',
  },
  containerSelf: {
    justifyContent: 'flex-end',
  },
  inner: {
    padding: PADDING,
    borderRadius: ROUNDED_RADIUS,
  },
  innerForeign: {
    borderTopLeftRadius: 0,
    backgroundColor: colors.white,
  },
  innerSelf: {
    borderTopRightRadius: 0,
    backgroundColor: colors.blue[500],
  },
  time: {
    marginTop: 4,
  },
  timeForeign: {
    paddingLeft: TIME_PADDING,
  },
  timeSelf: {
    paddingRight: TIME_PADDING,
    textAlign: 'right',
  },
});
