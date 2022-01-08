import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userEmail: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userEmail = action.payload.userEmail;
        },
        setUserLoggedOut: (state)=> {
            state.userEmail = null
        }
    }
});

export const { setActiveUser, setUserLoggedOut } = userSlice.actions

export const selectUserEmail = state => state.user.userEmail;

export default userSlice.reducer;