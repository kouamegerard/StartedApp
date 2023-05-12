import { createSelector, createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    deliveryFee: 100,
    freeDeliveryFrom: 1500,
    isFreeDelivery: 1200,
};

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addCartItem: (state, actions) => {
            const newJuice = actions.payload.juice
            const cartItem = state.items.find( (item) => item.juice.id === newJuice.id );

            if ( cartItem ) {
                cartItem.quantity += 1;
            } else {
                state.items.push({
                    item: newJuice,
                    quantity: 1,
                })
            }
        },

        // Remove item
        // removeItem: (state, actions) => {
        //     const item = state.items.find( (item) => item.juice.id === actions.payload.id );
        //     if ( item ) {
        //         item.quantity -= 1;
        //         if ( item.quantity === 0 ) {
        //             state.items = state.items.filter( (item) => item.juice.id !== actions.payload.id );
        //         }
        //     }
        // },

        // Change qunatity
        changeQuantity: (state, actions) => {
            const { itemId, amount } = actions.payload;
            const item = state.items.find( (item) => item.juice.id === actions.payload.id );
            if ( item ) {
                item.quantity += amount;
                if ( item.quantity < 1 ) {
                    item.quantity = 1;
                }
            }

            if ( item.quantity <= 0 ) {
                state.items = state.items.filter( (item) => item.juice.id !== itemId );
            }

        }
    }
});

const cartSelector = (state) => state.cart;
export const selectNumberOfItems = ( state ) => state.cart.items.length;
export const selectSubtotal = ( state ) => state.cart.items.reduce( (sum, item) => sum + ( item.juice.price * item.quantity ), 0 );
export const selectTotal = (state) => state.cart.items.reduce( (sum) => sum + selectSubtotal, 0 )
export const delivery = createSelector(
    cartSelector,
    selectSubtotal,
    (cart, subtotal) => ( subtotal === 0 || subtotal > cart.isFreeDelivery ? 0 : cart.freeDeliveryFrom )
);

export default cartSlice;