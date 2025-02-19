import { configureStore } from "@reduxjs/toolkit";
import { usersApiSlice } from "./features/users-ApiSlice";
import cartReducer from "../redux/features/cartSlice";

export const store = configureStore({
  reducer: {
    AllCarts: cartReducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApiSlice.middleware);
  },
});
