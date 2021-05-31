import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode: false
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleDarkMode(state){
            state.darkMode = !state.darkMode
        }
    }
})

export default uiSlice.reducer

export const { toggleDarkMode } = uiSlice.actions