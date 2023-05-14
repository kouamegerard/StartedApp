import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    deliveryFee: 1000,
    freeDeliveryFrom: 1500,
    isFreeDelivery: 1200
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state, actions) => {
            const newJuice = actions.payload.juice;
            const cartItem = state.items.find( (item) => item.juice.id === newJuice.id );
            if ( cartItem ) {
                cartItem.quantity += 1;
            } else {
                state.items.push({
                    juice: newJuice,
                    quantity: 1,
                });
            }            
        },
        changeQuantity: (state, actions) => {
            const { juiceId, amount } = actions.payload;
            const cartItem = state.items.find( (item) => item.juice.id === juiceId );

            if ( cartItem ) {
                cartItem.quantity += amount;
            }

            if ( cartItem.quantity <= 0 ) {
                state.items = state.items.filter( (item) => item !== cartItem )
            }
        },
    }
});

const cartSelector = (state) => state.cart;
export const selectNumberOfItems = ( state ) => state.cart.items.length;
export const selectSubtotal = (state) => state.cart.items.reduce( (sum, cartItem) => sum + ( cartItem.juice.price * cartItem.quantity ), 0 );
export const selectTotal = (state) => state.cart.items.reduce( (sum) => sum + selectSubtotal, 0 );
export const delivery = createSelector( 
    cartSelector,
    selectSubtotal,
    (cart, subtotal) => (subtotal === 0 || subtotal > cart.isFreeDelivery ? 0 : cart.freeDeliveryFrom)
 )

export default cartSlice;