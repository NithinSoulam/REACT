// src/store/userSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    resetUser: (state) => {
      state.id = null;
      state.name = null;
      state.email = null;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
