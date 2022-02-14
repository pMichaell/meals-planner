import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userUid: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userUid = action.payload.userUid;
        },
        setUserLoggedOut: (state) => {
            state.userUid = null;
        }
    },
});

export const {setActiveUser, setUserLoggedOut} = userSlice.actions

export const selectUserId = state => state.user.userUid;

export default userSlice.reducer;