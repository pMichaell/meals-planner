import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userLoggedIn: false,
    userUid: null,
    userEmail: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userUid = action.payload.userUid;
            state.userEmail = action.payload.userEmail;
            state.userLoggedIn = true;
        },
        setUserLoggedOut: (state)=> {
            state.userUid = null;
            state.userEmail = null
            state.userLoggedIn = false;
        }
    }
});

export const { setActiveUser, setUserLoggedOut } = userSlice.actions

export const selectUserEmail = state => state.user.userEmail;

export const selectUserLoggedIn = state => state.user.userLoggedIn;

export default userSlice.reducer;