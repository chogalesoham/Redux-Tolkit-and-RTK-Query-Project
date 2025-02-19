import { configureStore } from "@reduxjs/toolkit";
import { usersApiSlice } from "./features/users-ApiSlice";

export const store = configureStore({
  reducer: {
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApiSlice.middleware);
  },
});
