import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogoScreen from '../screens/LogoScreen';
import DocumentScreen from '../screens/DocumentScreen';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'LogoScreen'}
        screenOptions={{headerMode: false}}
        >
        <Stack.Screen name="LogoScreen" component={LogoScreen} />
        <Stack.Screen name="DocumentScreen" component={DocumentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
