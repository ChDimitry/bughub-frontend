import {createSlice} from '@reduxjs/toolkit'

const slice  = createSlice({
    name: 'auth',
    initialState: [{}],
    // These reducers will control the initial state
    reducers: {
        getUser: (state) =>{
            state.push({name: 'Dima'})
            state.push({name: 'David'})
        }
    }
})

// Exporting
export default slice.reducer;
export const {getUser} = slice.actions