import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/constants/theme'

const TopHeaderComponent = () => {
  return (
    <View 
        style={{ 
            width: '100%', 
            paddingTop: StatusBar.currentHeight + 12, 
            paddingBottom: 12, 
            paddingHorizontal: 12,
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            backgroundColor: COLORS.blue
        }}
    >
      <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 22 }}>JuiceUp</Text>
      <Image 
        source={ require('./../../../assets/profiles/genesesProfile.jpg') }
        resizeMode='cover'
        style={{ 
            width: 30,
            height: 30,
            borderRadius: 8,
        }}
      />
    </View>
  )
}

export default TopHeaderComponent