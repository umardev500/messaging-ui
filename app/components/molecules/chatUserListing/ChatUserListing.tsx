import { Avatar, Name, Text } from '@app/components/atoms';
import { colors } from '@app/constants';
import { Chat, RootStackParamList } from '@app/types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const ID = 1982;

interface Props {
  chat: Chat;
}

type StackProps = StackNavigationProp<RootStackParamList, 'ChatRoomStack'>;

export const ChatUserListing: React.FC<Props> = ({ chat }) => {
  const navigation = useNavigation<StackProps>();
  const { currentMessage, participants } = chat;
  const isRead = currentMessage.read;
  const recipient = participants.filter(participant => participant.id !== ID)[0];

  const pressHandler = useCallback(() => {
    navigation.navigate('ChatRoomStack', {
      id: chat.id,
    });
  }, []);

  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.container}>
        <Avatar dot source={recipient.picture.avatar} />
        {/* chat text */}
        <View style={styles.right}>
          <Name>{recipient.name}</Name>
          <Text
            numberOfLines={1}
            size={16}
            color={!isRead ? colors.gray[600] : colors.gray[400]}
            weight={!isRead ? '500' : '400'}>
            {currentMessage.text}
          </Text>
        </View>
        {/* chat status */}
        <View style={styles.rightEnd}>
          <Text
            numberOfLines={1}
            color={!isRead ? colors.gray[600] : colors.gray[400]}
            size={14}
            weight={!isRead ? '500' : '400'}>
            08:20 AM
          </Text>
          {/* <BadgeCounter bg={colors.green[400]} /> */}
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
