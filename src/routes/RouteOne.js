import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import HelpClient from '../screens/HelpClient';
import AccountOpening from '../screens/AccountOpening';

const Stack = createNativeStackNavigator();

export default function RouteOne() {
  return (    
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HelpClient" component={HelpClient} />
            <Stack.Screen name="AccountOpening" component={AccountOpening} />
        </Stack.Navigator>
    </NavigationContainer>

  );
}
