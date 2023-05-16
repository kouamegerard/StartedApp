import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const GoToBackComponent = ({ color, bgcolor, position='relative' }) => {
    const navigation = useNavigation();
  return (
    <Pressable 
        style={[ position === 'absolute' ? styles.position : '', { position: position, backgroundColor: bgcolor, borderRadius: 25, width: 25, height: 25, }]}
        onPress={() => navigation.goBack()}
    >
        <Feather name="arrow-left" size={24} color={color} />
    </Pressable>
  )
}

export default GoToBackComponent

const styles = StyleSheet.create({
  position: {
    top: 45,
    left: 18,
  }
})