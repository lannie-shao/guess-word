import wordGuessReducer from './wordRedux'
import { configureStore } from '@reduxjs/toolkit'

export const store=configureStore({
    reducer:wordGuessReducer,   
})

