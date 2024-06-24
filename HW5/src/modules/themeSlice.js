import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: 'light',
    },
    reducers: {
        switchTheme: (state) => {
            switch (state.value) {
                case 'light':
                    state.value = 'dark';
                    break;
                case 'dark':
                    state.value = 'light';
                    break;
                default:
                    return;
            }
        }
    },
});

export const { switchTheme } = themeSlice.actions

export default themeSlice.reducer