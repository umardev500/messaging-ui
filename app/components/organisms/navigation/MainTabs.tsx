import { HomePage } from '@app/components/pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

const Tab = createBottomTabNavigator();

export const MainTabs: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        name="HomeTab"
        component={HomePage}
      />
    </Tab.Navigator>
  );
};
