import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../utils/constants/theme';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Cart from '../screens/Cart';
import Juces from '../screens/Juces';
import Profile from '../screens/Profile';

const AppBottomNavigator = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <AppBottomNavigator.Navigator 
        sceneContainerStyle={{ backgroundColor: COLORS.blue }}
        screenOptions={ ({ route }) => (
            {
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if ( route.name === 'Home' ) {
                        iconName = focused 
                            ? 'ios-home-outline' : 'ios-home-sharp';
                    } else if ( route.name === 'Categories' ) {
                        iconName = focused ? 'logo-buffer' : 'logo-buffer';
                    } else if ( route.name === 'Cart' ) {
                        iconName = focused ? 'ios-cart' : 'ios-cart-outline';
                    } else if ( route.name === 'Juces' ) {
                        iconName = focused ? 'ios-beer-outline' : 'ios-beer';
                    } else if ( route.name === 'Profile' ) {
                        iconName = focused ? 'person-outline' : 'person';
                    }
                    size = focused ? 28 : 20;
                    
                    return (<Ionicons name={iconName} size={size} color={color} />);
                },
                tabBarActiveTintColor: COLORS.main,
                tabBarInactiveTintColor: COLORS.white,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 12,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    height: 60,
                    backgroundColor: COLORS.primary,
                    borderWidth: 0,
                    borderRadius: 15,
                    marginHorizontal: 2,
                    marginVertical: 2,
                    ...style.shadow,
                },
                
            }
        ) }
    >
        <AppBottomNavigator.Screen
            name='Home'
            component={Home}
        />
        <AppBottomNavigator.Screen
            name='Categories'
            component={Categories}
        />
        <AppBottomNavigator.Screen
            name='Cart'
            component={Cart}
            options={{ 
                tabBarBadge: 1,
             }}
        />
        <AppBottomNavigator.Screen
            name='Juces'
            component={Juces}
        />
        <AppBottomNavigator.Screen
            name='Profile'
            component={Profile}
        />
    </AppBottomNavigator.Navigator>
  )
}

export default BottomNavigator;

const style = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.main,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})