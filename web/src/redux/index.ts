import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { applicantReducer } from './Slices/ApplicantSlice';
import { messageReducer } from './Slices/MessageSlice';

export const store = configureStore({
  reducer: combineReducers({
    applicantReducer,
    messageReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
