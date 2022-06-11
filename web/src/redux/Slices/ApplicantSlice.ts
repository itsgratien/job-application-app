import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApplicantInitialStateT } from '@/generated/Applicants';

const initialState: ApplicantInitialStateT = {};

const applicantSlice = createSlice({
  name: 'Applicant',
  initialState,
  reducers: {
    applySuccess: (state, action: PayloadAction<boolean>) => ({
      ...state,
      applySuccess: action.payload,
    }),
    applyLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      applyLoading: action.payload,
    }),
    applyError: (state, action: PayloadAction<any>) => ({ ...state, applyError: action.payload }),
  },
});

const applicantReducer = applicantSlice.reducer;

const { applyLoading, applyError, applySuccess } = applicantSlice.actions;

export { applicantReducer, applyError, applyLoading, applySuccess };
