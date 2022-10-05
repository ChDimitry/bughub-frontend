import {createSlice} from '@reduxjs/toolkit'
import {retreiveBugs} from '../bugController'

const slice  = createSlice({
    name: 'bug',
    initialState: [],
    // These reducers will control the initial state
    reducers: {
        getBugs: state => retreiveBugs(),
        createBugs: (state, actions) =>{

        },
        updateBugs: (state, actions) =>{

        },
        markComplete: (state, action) =>{

        }
    }
})

// Exporting
export default slice.reducer;
export const {getBugs, createBugs, updateBugs, markComplete} = slice.actions