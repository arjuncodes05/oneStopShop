import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: false,
        user: {}
    },
    reducers: {
        login(state, action){
            state.status = true
            state.user = action.payload
        },
        logout(state){
            state.status = false
            state.user = {}
        }
    }
})


export const {login, logout} = authSlice.actions
export default authSlice.reducer