import { ChatRoomPage } from '@app/components/pages';
import { RootStackParamList } from '@app/types';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainTabs } from './MainTabs';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MainStack"
        component={MainTabs}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ChatRoomStack"
        component={ChatRoomPage}
      />
    </Stack.Navigator>
  );
};
