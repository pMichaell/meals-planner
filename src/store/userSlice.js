import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebase";

export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                return {userUid: user.uid, userEmail: user.email, userLoggedIn: true}
            } else {
                return {userUid: null, userEmail: null, userLoggedIn: false}
            }
        })
    }
)

const initialState = {
    userUid: null,
    userEmail: null,
    userLoggedIn: false
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
        setUserLoggedOut: (state) => {
            state.userUid = null;
            state.userEmail = null
            state.userLoggedIn = false;
        }
    },

    extraReducers: builder => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.userUid = action.payload.userUid;
            state.userEmail = action.payload.userEmail;
            state.userLoggedIn = action.payload.userLoggedIn;
        })
    }
});

export const {setActiveUser, setUserLoggedOut} = userSlice.actions

export const selectUserEmail = state => state.user.userEmail;

export const selectUserLoggedIn = state => state.user.userLoggedIn;

export const selectUserId = state => state.user.userLoggedIn;

export default userSlice.reducer;