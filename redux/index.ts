import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {cart: CartState}
export type AppDispatch = AppStore['dispatch']
