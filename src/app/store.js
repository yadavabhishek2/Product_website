import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import wishSlice from '../features/wishlist/wishSlice'

export default configureStore({
  reducer: {
    Allcart:cartSlice,
    AllWishlist:wishSlice
  }
})