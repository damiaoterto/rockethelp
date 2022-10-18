import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';

const Stack = createNativeStackNavigator();

export const AuthNavigation: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'SignIn'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'SignIn'} component={SignIn} />
    </Stack.Navigator>
  </NavigationContainer>
)
