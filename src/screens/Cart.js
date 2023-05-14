import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import TopHeaderComponent from '../components/headers/TopHeaderComponent';
import CartListItems from '../components/cart/CartListItems';
import { COLORS } from '../utils/constants/theme';
import { useSelector } from 'react-redux';
import { delivery, selectSubtotal } from '../store/slicers/cartSlice';

const CartItemsList = () => {
  const subtotal = useSelector( selectSubtotal );
  const isFreeDelivery = useSelector( delivery );
  const total = subtotal + isFreeDelivery;

  return (
      <View style={styles.cartTotal}>
          <View style={styles.cartTotalRow}>
              <Text style={styles.cartTotalText}>Subtotal</Text>
              <Text style={styles.cartTotalText}>{subtotal}CFA</Text>
          </View>
          <View style={styles.cartTotalRow}>
              <Text style={styles.cartTotalText}>Delevery</Text>
              <Text style={styles.cartTotalText}>{isFreeDelivery}CFA</Text>
          </View>
          <View style={styles.cartTotalRow}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.total}>{total}CFA</Text>
          </View>
      </View>
  )
};

const EmptyCart = () => {
  return (
      <View style={styles.cartTotal}>
        <Text style={{ fontSize: 22, fontWeight: "600", color: COLORS.white }}>Your cart is empty</Text>
      </View>
  )
};

const Cart = () => {

  const cartItems = useSelector( (state) => state.cart.items );
  console.log("Cart:::",cartItems);

  return (
    <>
      <TopHeaderComponent />
      <FlatList
        data={cartItems}
        renderItem={ ({ item }) => (
          <CartListItems cartItem={item} />
        ) }
        ListEmptyComponent={EmptyCart}
        ListFooterComponent={ CartItemsList }
        style={{ 
          marginBottom: 48,
         }}
      />
    </>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {},
  cartTotal: {
      margin: 20,
  },
  cartTotalRow: {
      marginVertical: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderStyle: "dashed",
      borderColor: COLORS.white,
  },
  cartTotalText: {
      fontSize: 15,
      color: COLORS.white,
  },
  total: {
      fontSize: 18,
      fontWeight: "bold",
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
      color: "#FFFFFF",
  },
});