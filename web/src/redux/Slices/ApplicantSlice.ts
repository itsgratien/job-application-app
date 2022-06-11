import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApplicantInitialStateT } from '@/generated/Applicants';

const initialState: ApplicantInitialStateT = {};

const applicantSlice = createSlice({
  name: 'Applicant',
  initialState,
  reducers: {
    apply: (state, action: PayloadAction<boolean>) => ({ ...state, applySuccess: action.payload }),
  },
});

const applicantReducer = applicantSlice.reducer;

const { apply } = applicantSlice.actions;

export { apply, applicantReducer };
