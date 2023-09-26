import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from './features/auth/authSlice'

const preloadedState = {
    userAuth: {
      user: JSON.parse(localStorage.getItem('BattleshipUser')) || null
    }
  }

export const store = configureStore({
  reducer: {
    userAuth: authSliceReducer,
  },
  preloadedState: preloadedState
})