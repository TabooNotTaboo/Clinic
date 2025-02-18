import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./Slice/loginSlice/loginSlice";

export const store = configureStore({
  reducer: {
    [loginSlice.name]: loginSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

