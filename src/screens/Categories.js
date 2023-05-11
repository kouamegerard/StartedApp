import { View, Text, FlatList, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import TopHeaderComponent from '../components/headers/TopHeaderComponent'
import categoriesData from '../data/Categories/categoriesData'
import { COLORS } from '../utils/constants/theme'

const Categories = () => {

  const categories = categoriesData;

  const cardItem = ({ item, index }) => {
    return (
      <Pressable 
        onPress={ () => console.warn(item.name) }
        style={styles.itemContainer}>
        <Image 
          source={ item.image } 
          style={styles.image}
        />
      </Pressable>
    )
  }

  return (
    <View 
      style={{ 
          height: '100%', 
          width: '100%', 
          backgroundColor: COLORS.blue, 
      }}
    >
      <TopHeaderComponent />
      <View style={styles.container}>
        <FlatList 
            data={categories}
            renderItem={ cardItem }
            numColumns={4}
            showsVerticalScrollIndicator={false}
            style={{ width: "100%", height: "100%", }}
        />
      </View>
    </View>
  )
}

export default Categories


const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 12,
  backgroundColor: "#cecece"
},
  itemContainer: {
    width: "15%",
    flexDirection: "row",
    flexWrap: "wrap",
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