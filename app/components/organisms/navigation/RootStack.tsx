import { HomePage } from '@app/components/pages';
import { RootStackParamList } from '@app/types';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HomePage"
        component={HomePage}
      />
    </Stack.Navigator>
  );
};
