import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageInitialStateT } from '@/generated/Applicants';

const initialState: MessageInitialStateT = {};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
});

export const messageReducer = messageSlice.reducer;
