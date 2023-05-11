import { View, FlatList, StyleSheet, } from 'react-native'
import React from 'react'
import TopHeaderComponent from '../components/headers/TopHeaderComponent'
import categoriesData from '../data/Categories/categoriesData'
import { COLORS } from '../utils/constants/theme'
import CategoriesCardComponent from '../components/categories/CategoriesCardComponent'

const Categories = () => {

  const categories = categoriesData;

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
          renderItem={ ({ item, index }) => <CategoriesCardComponent item={item} index={index} /> }
          numColumns={3}
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
},
});