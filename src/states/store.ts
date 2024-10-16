import { configureStore } from "@reduxjs/toolkit";

import sidebarToggleSlice from "./sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebarToggle: sidebarToggleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
