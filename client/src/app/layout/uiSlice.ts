import { createSlice } from "@reduxjs/toolkit";

const getInitailDarkMode = () => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : true
}

export const uiSlice = createSlice({
    name: 'ui1',
    initialState: {
        isLoading: false,
        darkMode: getInitailDarkMode()
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        stopLoading: (state) => {
            state.isLoading = false;
        },
        setDarkMode: (state) => {
            localStorage.setItem('darkMode', JSON.stringify(!state.darkMode))
            state.darkMode = !state.darkMode
        }
    }

})

export const { startLoading, stopLoading, setDarkMode } = uiSlice.actions;