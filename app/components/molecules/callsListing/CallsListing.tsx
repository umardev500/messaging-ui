import { Avatar, CamSolid, Name, PhoneSolid } from '@app/components/atoms';
import { UserCalls } from '@app/types';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface Props {
  user: UserCalls;
}

export const CallsListing: React.FC<Props> = ({ user }) => {
  const { picture, name } = user;

  return (
    <View style={styles.container}>
      <Avatar size={50} dot source={picture.avatar} />
      <View style={styles.right}>
        <Name>{name}</Name>
      </View>
      <View style={styles.rightEnd}>
        <TouchableOpacity>
          <PhoneSolid size={15} />
        </TouchableOpacity>

        <TouchableOpacity>
          <CamSolid size={15} />
        </TouchableOpacity>
      </View>
    </View>
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
    alignItems: 'center',
    gap: 16,
    flexDirection: 'row',
  },
});
