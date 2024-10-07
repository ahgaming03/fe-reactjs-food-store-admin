import { configureStore } from "@reduxjs/toolkit";

import sidebarToggleReducer from "./sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebarToggle: sidebarToggleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
