import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import Home from '../screens/Home';
import HelpClient from '../screens/HelpClient';
import AccountOpening from '../screens/AccountOpening';

import styles from './style';

const Stack = createNativeStackNavigator();

export default function RouteOne() {
  return (    
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Home"
              component={Home}
              options={
                {title: 'Bank Viki',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 32,                  
                },
              }
              }/>
            <Stack.Screen
              name="HelpClient"
              component={HelpClient}
              options={
                {title: 'Help Client',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24,                  
                },
              }
              }
            />
            <Stack.Screen
              name="AccountOpening"
              component={AccountOpening}
              options={
                {title: 'Account Opening',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24,                  
                },
              }
              }
            />
        </Stack.Navigator>
    </NavigationContainer>

  );
}
