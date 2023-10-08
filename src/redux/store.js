import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from './features/auth/authSlice'
import routingSliceReducer from './features/routing/routingSlice'

const preloadedState = {
    userAuth: {
        user: JSON.parse(localStorage.getItem('ElementalHeroesUser')) || null
    }
}

export const store = configureStore({
    reducer: {
        userAuth: authSliceReducer,
        userRouting: routingSliceReducer
    },
    preloadedState: preloadedState
})