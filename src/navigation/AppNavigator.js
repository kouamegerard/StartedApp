import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {OnboardingScreen, HomeScreen, JuiceDetail} from './../screens/Index';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen name='OnboardingScreen' component={OnboardingScreen} options={{ headerShown: false }} />
          <AppStack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
          <AppStack.Screen name='JuiceDetail' component={JuiceDetail} options={{ headerShown: false, presentation: 'containedModal' }} />
        </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator