import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ownedSkills: null,
    ownedWeapons: null,
    balance: null
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        addOwnedSkills: (state, action) => {
            state.ownedSkills = action.payload
        },
        removeOwnedSkills: (state) => {
            state.ownedSkills = null
        },
        addOwnedWeapons: (state, action) => {
            state.ownedWeapons = action.payload
        },
        removeOwnedWeapons: (state) => {
            state.ownedWeapons = null
        },
        addBalance: (state, action) => {
            state.balance = action.payload
        },
        removeBalance: (state) => {
            state.balance = null
        },
        removeAllUserData: (state) => {
            state.ownedSkills = null;
            state.ownedWeapons = null;
            state.balance = null;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addOwnedSkills, addOwnedWeapons, addBalance, removeOwnedSkills, removeOwnedWeapons, removeBalance, removeAllUserData } = userDataSlice.actions

export default userDataSlice.reducer