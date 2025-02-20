import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isLightMode: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isLightMode = !state.isLightMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
