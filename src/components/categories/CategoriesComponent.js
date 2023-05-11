import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import categoriesData from '../../data/Categories/categoriesData'
import { COLORS } from '../../utils/constants/theme'

const CategoriesComponent = () => {
  return (
    <View style={{ paddingLeft: 12, }}>
        <FlatList 
            data={categoriesData}
            renderItem={({item}) => (
                <View style={{ marginRight: 14, paddingVertical: 18, }}>
                    <View
                        style={{ 
                            width: 50,
                            height: 50,
                            borderWidth: 1,
                            borderColor: COLORS.main,
                            backgroundColor: COLORS.primary,
                            borderRadius: 100,
                            padding: 8,
                        }}
                    >
                        <Image 
                            source={item.image}
                            resizeMode='contain'
                            style={{ 
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </View>
                    <Text style={{ color: COLORS.white }}>{item.name}</Text>
                </View>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default CategoriesComponent;