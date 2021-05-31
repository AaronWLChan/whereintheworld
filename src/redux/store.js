import { configureStore } from '@reduxjs/toolkit'
import countryReducer from './countrySlice'
import uiReducer from './uiSlice'
import { saveState, loadState } from './localStorage'

const persistedState = loadState()

const store = configureStore({
    reducer: {
        countryReducer,
        uiReducer
    },

    preloadedState: persistedState
})

//Only save UI preference
store.subscribe(() => {
    saveState({
        uiReducer: store.getState().uiReducer
    
    })
})


export default store