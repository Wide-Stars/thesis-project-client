import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeToken } = userSlice.actions;

export default userSlice.reducer;
