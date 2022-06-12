import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ApplicantInitialStateT,
  ApplicantCollectionT,
  ChangeStatusSuccessT,
  ApplicationStatusEnum,
} from '@/generated/Applicants';

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
    setScroll: (state, action: PayloadAction<boolean>) => ({ ...state, scroll: action.payload }),
    setApplicationDetail: (state, action: PayloadAction<ApplicantCollectionT>) => ({
      ...state,
      applicationDetail: action.payload,
    }),
    changeStatusLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      changeStatusLoading: action.payload,
    }),
    changeStatusError: (state, action: PayloadAction<any>) => ({
      ...state,
      changeStatusError: action.payload,
    }),
    changeStatusSuccess: (state, action: PayloadAction<ChangeStatusSuccessT>) => ({
      ...state,
      changeStatusSuccess: action.payload,
      applicationDetail: state.applicationDetail
        ? {
            ...state.applicationDetail,
            status:
              state.applicationDetail.slug === action.payload.slug
                ? (action.payload.status as ApplicationStatusEnum)
                : state.applicationDetail.status,
          }
        : state.applicationDetail,
    }),
  },
});

const applicantReducer = applicantSlice.reducer;

const {
  applyLoading,
  applyError,
  applySuccess,
  setScroll,
  setApplicationDetail,
  changeStatusLoading,
  changeStatusError,
  changeStatusSuccess,
} = applicantSlice.actions;

export {
  applicantReducer,
  applyError,
  applyLoading,
  applySuccess,
  setScroll,
  setApplicationDetail,
  changeStatusLoading,
  changeStatusError,
  changeStatusSuccess,
};
