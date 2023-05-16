import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/constants/theme'
import ProductHeaderComponent from '../components/headers/ProductHeaderComponent'
import juices from '../data/Juices/juices'

const { width, height } = Dimensions.get('window');

const Juces = () => {

  return (
    <View 
      style={styles.container}
    >
      <ProductHeaderComponent />
      <FlatList
        data={juices}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.screen}>
            <Image source={item.image} style={styles.image} resizeMethod='resize'/>
          </View>
        )}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        numColumns={item => item.length}
      />
    </View>
  )
}

export default Juces;

const styles = StyleSheet.create({
  container: { 
    flex: 1,  
    backgroundColor: COLORS.blue, 
  },
  screen: {
    justifyContent: 'center', 
    alignItems: 'center', 
    width: width, 
    height: height,
  },
  image: {
    width: width, 
    height: height,
    resizeMode: 'contain'
  }
});