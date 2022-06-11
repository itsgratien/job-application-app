import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageInitialStateT } from '@/generated/Applicants';

const initialState: MessageInitialStateT = {};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string | undefined>) => ({
      ...state,
      message: action.payload,
    }),
    setError: (state, action: PayloadAction<string | undefined>) => ({
      ...state,
      error: action.payload,
    }),
  },
});

const messageReducer = messageSlice.reducer;

const { setError, setMessage } = messageSlice.actions;

export { setError, setMessage, messageReducer };
