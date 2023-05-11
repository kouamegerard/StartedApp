import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/constants/theme'

const CategoriesCardComponent = ({ item, index }) => {
  return (
    <Pressable 
      onPress={ () => console.warn(item.name) }
      key={index}
      style={styles.itemContainer}>
      <Image 
        source={ item.image } 
        style={styles.image}
      />
      <Text style={{ color: "#FFFFFF" }}>{ item.name }</Text>
    </Pressable>
  )
}

export default CategoriesCardComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
    itemContainer: {
      width: "31%",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
      borderColor: COLORS.main,
      backgroundColor: COLORS.primary,
      borderRadius: 8,
      borderWidth: 1,
      marginHorizontal: 4,
      marginVertical: 4,
    },
    image: { 
      width: "100%", 
      aspectRatio: 1, 
      height: '100%',
    }
  });