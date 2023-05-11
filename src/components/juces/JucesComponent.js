import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react';
import { COLORS } from '../../utils/constants/theme'
import juicesData from '../../data/Juices/juicesData'
import Ionicons from '@expo/vector-icons/Ionicons';

const JucesComponent = () => {
  return (
    <View>
        <FlatList 
            data={juicesData}
            renderItem={({item}) => (
                <View 
                    style={{ 
                        marginRight: 14, 
                        marginLeft: 1, 
                        paddingVertical: 18,
                        width: 270,
                        backgroundColor: COLORS.primary,
                        borderRadius: 28,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Image 
                        source={item.image}
                        resizeMode='contain'
                        style={{ 
                            width: '100%',
                            height: 280,
                        }}
                    />
                    <View style={{ padding: 8, marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', gap: 10, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column', flexWrap: 'wrap', gap: 4 }}>
                            <Text style={{ color: COLORS.white, flexWrap: 'wrap', fontSize: 15, }}>{item.name}</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ color: COLORS.white, fontSize: 18, }}>{item.currency}</Text>
                                <Text style={{ color: COLORS.white, fontSize: 28, fontWeight: '900' }}>{item.price}</Text>
                            </View>
                        </View>
                        <Pressable
                            style={{ 
                                backgroundColor: COLORS.blue,
                                padding: 4,
                                height: 32,
                                width: 32,
                                borderRadius: 100,
                                borderWidth: 1,
                                borderColor: COLORS.main,
                                alignItems: 'center'
                            }}
                        >
                            <Ionicons 
                                name="ios-cart-outline" 
                                size={22} 
                                color={COLORS.white} 
                            />
                        </Pressable>
                    </View>
                </View>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default JucesComponent;