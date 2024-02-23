import { createSlice, configureStore } from "@reduxjs/toolkit"



const initialState = {
    theme: "light",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        }
    }
})
export const { toggleTheme } = themeSlice.actions;

export const store = configureStore({
    reducer: {
        [themeSlice.name]: themeSlice.reducer
    }
})


