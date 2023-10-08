import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allowCreatePage: false,
    allowFeaturePages: false
}

export const routingSlice = createSlice({
    name: 'userRouting',
    initialState,
    reducers: {
        allowCreatePageAccess: (state) => {
            state.allowCreatePage = true
        },
        denyCreatePageAccess: (state) => {
            state.allowCreatePage = false
        },
        allowFeaturePagesAccess: (state) => {
            state.allowFeaturePages = true
        },
        denyFeaturePagesAccess: (state) => {
            state.allowFeaturePages = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { allowCreatePageAccess, denyCreatePageAccess, allowFeaturePagesAccess, denyFeaturePagesAccess } = routingSlice.actions

export default routingSlice.reducer