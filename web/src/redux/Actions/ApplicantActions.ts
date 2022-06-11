import { Dispatch } from '@reduxjs/toolkit';
import { apply } from '@/redux/Slices/ApplicantSlice';
export const applyAction = () => async (dispatch: Dispatch) => {
  dispatch(apply(true));
};
