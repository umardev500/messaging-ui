import { CamSolid, ChatSolid, PeopleSolid } from '@app/components/atoms';
import { CallsPage, HomePage } from '@app/components/pages';
import { colors } from '@app/constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useCallback } from 'react';

const Tab = createBottomTabNavigator();

export const MainTabs: React.FC = () => {
  const renderChatMenu = useCallback((props: { focused: boolean; color: string; size: number }) => {
    return <ChatSolid size={20} color={props.color} />;
  }, []);

  const renderCamMenu = useCallback((props: { focused: boolean; color: string; size: number }) => {
    return <CamSolid size={20} color={props.color} />;
  }, []);

  const renderPeopleMenu = useCallback((props: { focused: boolean; color: string; size: number }) => {
    return <PeopleSolid size={20} color={props.color} />;
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: colors.gray[400],
        tabBarActiveTintColor: colors.red[600],
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          paddingTop: 10,
          height: 65,
          paddingBottom: 8,
        },
        tabBarIconStyle: {},
        tabBarItemStyle: {
          marginRight: 10,
          gap: 0,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: renderChatMenu,
          headerShown: false,
          title: 'Chats',
        }}
        name="HomeTab"
        component={HomePage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: renderCamMenu,
          headerShown: false,
          title: 'Calls',
        }}
        name="CallTab"
        component={CallsPage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: renderPeopleMenu,
          headerShown: false,
          title: 'People',
        }}
        name="PeopleTab"
        component={HomePage}
      />
    </Tab.Navigator>
  );
};
