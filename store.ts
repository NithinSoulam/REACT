// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userslice.ts';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Export RootState and AppDispatch for use in your app if needed
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
