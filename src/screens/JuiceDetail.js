import { View, Text, StyleSheet, ScrollView, FlatList, useWindowDimensions, Image, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { COLORS } from '../utils/constants/theme';
import cartSlice from '../store/slicers/cartSlice';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import GoToBackComponent from '../components/headers/GoToBackComponent';

const JuiceDetail = ({navigation}) => {
    // const navigation = useNavigation();
    const juice = useSelector( (state) => state.juices.selectedJuice );
    const dispatch = useDispatch();

    const { width } = useWindowDimensions();
    
    const addToCart = () => {
        dispatch( cartSlice.actions.addCartItem({juice}) );
        // navigation.navigate("Cart")
    }
  return (
    <View style={styles.container}>
        <ScrollView>
            {/* Image Caroussel */}

            <View style={{ position: 'relative' }}>
                <FlatList
                    data={juice.images}
                    renderItem={ ({ item }) => (
                        <View
                            style={{ width: width, height: 313 }} 
                        >
                            <Image
                            source={{ uri: item }}
                            style={{ width: "100%", aspectRatio: 1, }}
                            resizeMode='cover'
                        />
                        </View>
                    ) }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />
                {/* Price Content */}
                <Text style={[styles.price, { position: 'absolute', bottom: 5, left: 18, }]}>{juice.price} {juice.currency}</Text>
                
                <GoToBackComponent color={COLORS.white} bgcolor={COLORS.halfLightBlue} position='absolute' />
            </View>
            <View style={{ padding: 20, }}>
                {/* Title Content */}
                <Text style={styles.title}>{juice.name}</Text>
                
                {/* Description Content */}
                <Text style={{ marginTop: 18, fontSize: 18, fontWeight: 'bold', borderBottomWidth: 1, borderStyle: 'dashed', borderBottomColor: COLORS.white, color: COLORS.white }}>Ingredients</Text>
                <Text style={styles.description}>{juice.ingredients}</Text>
            </View>
        </ScrollView>

        {/* Add to cart Content */}
        <Pressable 
            onPress={addToCart}
            style={styles.button}>
            <Text style={styles.buttonText}>Add To Cart</Text>
        </Pressable>

        {/* Navigation Content */}
        
    </View>
  )
}

export default JuiceDetail;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.blue,
    },
    title: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10,
        color: COLORS.white,
    },
    price: {
        fontWeight: "bold",
        color: COLORS.white,
        fontSize: 13,
        letterSpacing: 1.5,
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor: COLORS.main
    },
    description: {
        fontSize: 18,
        fontWeight: "300",
        lineHeight: 28,
        marginVertical: 10,
        color: COLORS.white,
    },
    button: {
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: 22,
        padding: 18,
        borderRadius: 50,
        width: "90%",
        backgroundColor: "#000000",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
        color: COLORS.white,
    },
});