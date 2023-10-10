import { createSlice } from '@reduxjs/toolkit'

// { status: bool, data: object}
// status: indicate if the client has successfully fetched data from the server
// data: the data about the hero
const initialState = {
    hero: null
}

export const heroSlice = createSlice({
    name: 'heroData',
    initialState,
    reducers: {
        setHeroData: (state, action) => {
            state.hero = action.payload
        },
        removeHeroData: (state) => {
            state.hero = null
        }
    },
})

// Action creators are generated for each case reducer function
export const { setHeroData, removeHeroData } = heroSlice.actions

export default heroSlice.reducer