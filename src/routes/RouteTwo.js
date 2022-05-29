import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Messages from '../screens/Messages'
import HelpClientFeed from '../screens/HelpClientFeed'

const Tab = createBottomTabNavigator();

export default function RouteTwo() {
  return (    
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HelpClientFeed') {
          iconName = focused
            ? 'book'
            : 'book';
        } else if (route.name === 'Messages') {
          iconName = focused ? 'clipboard' : 'clipboard';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Help Client" component={HelpClientFeed} />
    <Tab.Screen name="Messages" component={Messages} />
  </Tab.Navigator>  

  );
}
