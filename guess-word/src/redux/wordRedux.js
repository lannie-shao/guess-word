import {createSlice} from '@reduxjs/toolkit'

const wordSlice=createSlice({
    name:'wordGuess',
    initialState:{
        word:'',
        guessedLetters:[],
        activeLetters:[],
        inactiveLetters:[],
    },
    reducers:{
        addLetters:(state,action)=>{
            state.guessedLetters.push(action.payload)
        },
        wordToGuess:(state,action)=>{
            state.word=action.payload
        }
    }
})

export const {addLetters,wordToGuess}=wordSlice.actions
export default wordSlice.reducer