import { createSlice } from "@reduxjs/toolkit";

interface SidebarToggleState {
  isOpen: boolean;
}

const initialState: SidebarToggleState = {
  isOpen: false,
};

const sidebarToggleSlice = createSlice({
  name: "sidebarToggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = sidebarToggleSlice.actions;

export default sidebarToggleSlice.reducer;
