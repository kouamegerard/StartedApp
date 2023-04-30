import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {OnboardingScreen, Home} from '../screens/Index';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen name='OnboardingScreen' component={OnboardingScreen} options={{ headerShown: false }} />
          <AppStack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator