import { View, Text, FlatList, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react';
import { COLORS } from '../../utils/constants/theme'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import juicesSlice from '../../store/slicers/juices';
import cartSlice from '../../store/slicers/cartSlice';

const JucesComponent = ({navigation}) => {

    const dispatch = useDispatch();
    const juice = (item) => {
        dispatch(juicesSlice.actions.setSelectJuice(item.id))
        navigation.navigate("JuiceDetail", {
            juiceId: item.id
        })
    }

    const juiceAdded = () => {
        dispatch(juicesSlice.actions.setSelectJuice(item.id))
        console.log(useSelector( (state) => state.juices.selectedJuice ));
    }

    const juices = useSelector( (state) => state.juices.juices );

    const addToCart = () => {
        dispatch( cartSlice.actions.addCartItem({juiceAdded}) );
        // navigation.navigate("Cart")
    }
    // console.log(juices);

  return (
    <View>
        <FlatList 
            data={juices}
            renderItem={({item}) => (
                <Pressable 
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
                    onPress={ () => juice(item) }
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
                            <View style={{ flexDirection: 'row', alignItems: 'flex-start', }}>
                                <Text style={{ color: COLORS.white, fontSize: 28, fontWeight: '400' }}>{item.price}</Text>
                                <Text style={styles.currencyLabel}>/{item.currency}</Text>
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
                            onPress={ () => console.log(":::Added:::") }
                        >
                            <Ionicons 
                                name="ios-cart-outline" 
                                size={22} 
                                color={COLORS.white} 
                            />
                        </Pressable>
                    </View>
                </Pressable>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default JucesComponent;

const styles = StyleSheet.create({

    currencyLabel: {
        fontSize: 10,
        fontWeight: "300",
        color: COLORS.main,
    },
})