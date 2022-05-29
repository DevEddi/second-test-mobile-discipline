import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import AccountOpening from '../screens/AccountOpening';
import HelpClient from '../screens/HelpClient';

const Stack = createNativeStackNavigator();

export default function RouteOne() {
  return (    
    <NavigationContainer>        
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Home"
              component={Home}
              options={
                {title: 'Viki Bank',
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
