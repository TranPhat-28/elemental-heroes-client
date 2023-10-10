import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from './features/auth/authSlice'
import routingSliceReducer from './features/routing/routingSlice'
import heroSliceReducer from './features/hero/heroSlice'

const preloadedState = {
    userAuth: {
        user: JSON.parse(localStorage.getItem('ElementalHeroesUser')) || null
    }
}

export const store = configureStore({
    reducer: {
        userAuth: authSliceReducer,
        userRouting: routingSliceReducer,
        heroData: heroSliceReducer
    },
    preloadedState: preloadedState
})