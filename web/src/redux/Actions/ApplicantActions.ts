import { Dispatch } from '@reduxjs/toolkit';
import * as applicantSlice from '@/redux/Slices/ApplicantSlice';
import { action } from '@/utils/ActionSetup';
import { apiEndPoints } from '@/utils/ApiEndPoints';
import { ApplicantT } from '@/generated/Applicants';
import * as messageSlice from '@/redux/Slices/MessageSlice';

export const applyAction = (values: ApplicantT) => async (dispatch: Dispatch) => {
  dispatch(applicantSlice.applyLoading(true));
  return action({
    method: 'POST',
    url: apiEndPoints.apply,
    data: values,
    onError: (e) => {
      dispatch(applicantSlice.applyLoading(false));
      dispatch(applicantSlice.applyError(e.data));
      dispatch(messageSlice.setError(e.data.error));
    },
    onSuccess: (res) => {
      dispatch(applicantSlice.applyLoading(false));
      dispatch(applicantSlice.applySuccess(true));
      dispatch(messageSlice.setMessage(res.message));
    },
  });
};
