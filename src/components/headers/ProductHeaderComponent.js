import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/constants/theme'
import GoToBackComponent from './GoToBackComponent'

const ProductHeaderComponent = ({bgcolor='transparent'}) => {
  return (
    <View 
        style={{ 
            width: '100%', 
            paddingTop: StatusBar.currentHeight, 
            paddingBottom: 12, 
            paddingHorizontal: 12,
            flexDirection: 'row', 
            alignItems: 'flex-start', 
            justifyContent: 'flex-start',
            backgroundColor: bgcolor,
            position: 'absolute',
            zIndex: 10,
        }}
    >
      <GoToBackComponent color={COLORS.white} bgcolor={COLORS.main} />
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', gap: 12, }}>
        <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 16 }}>On Map</Text>
        <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 18 }}>Smoothies</Text>
      </View>
    </View>
  )
}

export default ProductHeaderComponent