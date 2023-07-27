import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";

// Configure the Redux store using configureStore from Redux Toolkit
export const store = configureStore({
  reducer: contactReducer, // Use the contactReducer as the root reducer for the store
});

// Define the AppDispatch type to be the type of the store's dispatch function
export type AppDispatch = typeof store.dispatch;

// Define the RootState type to be the return type of the store's getState function
export type RootState = ReturnType<typeof store.getState>;
