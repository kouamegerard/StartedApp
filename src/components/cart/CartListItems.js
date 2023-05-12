
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../../utils/constants/theme';

const CartListItems = ({ cartItem }) => {

    const increaseQuantity = () => {
        // dispatch(
        //   cartSlice.actions.changeQuantity({
        //     productId: cartItem.product.id,
        //     amount: 1,
        //   })
        // );
    };

    const decreaseQuantity = () => {
    // dispatch(
    //     cartSlice.actions.changeQuantity({
    //     productId: cartItem.product.id,
    //     amount: -1,
    //     })
    // );
    };
    
    return (
        <View style={styles.container}>
          <Image source={ cartItem.product.image } style={styles.image} />
          <View style={styles.contentContainer}>
            <Text style={styles.name}>{cartItem.product.name}</Text>
            <Text style={styles.size}>Unité: {cartItem.currency}{cartItem.product.price}</Text>
    
            <View style={styles.footer}>
              <Feather
                onPress={decreaseQuantity}
                name="minus-circle"
                size={24}
                color="gray"
              />
              <Text style={styles.quantity}>{cartItem.quantity}</Text>
              <Feather
                onPress={increaseQuantity}
                name="plus-circle"
                size={24}
                color="gray"
              />
              <Text style={styles.itemTotal}>{cartItem.currency} {cartItem.product.price}</Text>
            </View>
          </View>
        </View>
    );

}

export default CartListItems;

const styles = StyleSheet.create({
    container: {
      padding: 10,
      paddingHorizontal: 20,
      flexDirection: "row",
      borderWidth: 1,
      borderColor: COLORS.main,
      marginVertical: 3,
      marginHorizontal: 8,
      borderRadius: 8,
      backgroundColor: COLORS.primary,
    },
    contentContainer: {
      flex: 1,
      marginLeft: 10,
    },
    image: {
      width: "25%",
      aspectRatio: 1,
    },
    name: {
      fontWeight: "500",
      fontSize: 18,
      color: COLORS.main,
    },
    size: {
      fontSize: 16,
      color: COLORS.main,
    },
    quantity: {
      marginHorizontal: 10,
      fontWeight: "bold",
      color: COLORS.main,
    },
    footer: {
      marginTop: "auto",
      flexDirection: "row",
      alignItems: "center",
    },
    itemTotal: {
      fontSize: 16,
      marginLeft: "auto",
      fontWeight: "500",
      color: COLORS.main,
    },
});