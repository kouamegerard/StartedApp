import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../utils/constants/theme'

const TitleHeading = ({label}) => {
  return (
    <Text 
        style={{ 
            fontSize: SIZES.h1,
            fontWeight: '800',
            color: COLORS.white,
            paddingLeft: 12,
        }}
    >{label}</Text>
  )
}

export default TitleHeading;