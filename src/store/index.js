import { configureStore } from "@reduxjs/toolkit";
import juicesSlice from "./slicers/juices";
import categoriesSlice from "./slicers/categories";
import productsSlice from "./slicers/products";
import cartSlice from "./slicers/cartSlice";


const store = configureStore({
    reducer: {
        juices: juicesSlice.reducer,
        categories: categoriesSlice.reducer,
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
    }
})

export default store;