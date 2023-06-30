import { Avatar, BadgeCounter, Name, Text } from '@app/components/atoms';
import { colors } from '@app/constants';
import React, { useCallback } from 'react';
import { ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native';

interface Props {
  name?: string;
  text?: string;
  time?: string;
  avatar: ImageSourcePropType;
}

export const ChatUserListing: React.FC<Props> = ({ name, text, time, avatar }) => {
  const pressHandler = useCallback(() => {
    console.log('clicked');
  }, []);

  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.container}>
        <Avatar dot source={avatar} />
        {/* chat text */}
        <View style={styles.right}>
          <Name>{name}</Name>
          <Text numberOfLines={1} size={16} color={colors.gray[400]}>
            {text}
          </Text>
        </View>
        {/* chat status */}
        <View style={styles.rightEnd}>
          <Text numberOfLines={1} color={colors.gray[400]} size={14}>
            {time}
          </Text>
          {time !== '08:12 AM' ? <BadgeCounter bg={colors.green[400]} /> : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  right: {
    flex: 1,
    gap: 4,
    paddingHorizontal: 16,
  },
  rightEnd: {
    alignItems: 'flex-end',
    gap: 4,
  },
});
