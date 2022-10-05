import {createSlice} from '@reduxjs/toolkit'

const slice  = createSlice({
    name: 'auth',
    initialState: {
        admin: false,
        loggedIn: false,
    },
    // These reducers will control the initial state
    reducers: {
        signIn: (state, action) =>{
            // Retreive the login name and password
            const {name, password} = action.payload;
            state.loggedIn = true;
            state.admin = true;
        },
        signOut: (state) =>{
            state.loggedIn = false;
            state.admin = false;
        },
        createUser: (state, action) =>{
            
        },
    }
})

// Exporting
export default slice.reducer;
export const {signIn, signOut, createUser} = slice.actions