import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    sideMenuOpen: false
}

const uiSlice = createSlice( {
    name: 'ui',
    initialState,
    reducers: {
         changeSideMenuState: (state) => {
             state.sideMenuOpen = !state.sideMenuOpen;
         }
    }
});

export const { changeSideMenuState } = uiSlice.actions;

export const selectSideMenu = state => state.ui.sideMenuOpen;

export default uiSlice.reducer;