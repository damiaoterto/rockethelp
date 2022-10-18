import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Register } from '../screens/Register';
import { Details } from '../screens/Details';

const Stack = createNativeStackNavigator();

export const AppNavigation: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'home'} component={Home} />
      <Stack.Screen name={'new'} component={Register} />
      <Stack.Screen name={'details'} component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
)
