import { Dispatch } from '@reduxjs/toolkit';
import * as applicantSlice from '@/redux/Slices/ApplicantSlice';
import { action } from '@/utils/ActionSetup';
import { apiEndPoints } from '@/utils/ApiEndPoints';
import { ApplicantT, ChangeStatusParamT } from '@/generated/Applicants';
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

export const changeApplicationStatusAction =
  (values: ChangeStatusParamT) => async (dispatch: Dispatch) => {
    dispatch(applicantSlice.changeStatusLoading(true));

    return action({
      method: 'PUT',
      url: apiEndPoints.changeStatus(values.slug),
      data: values,
      onError: (e) => {
        dispatch(applicantSlice.changeStatusLoading(false));
        dispatch(applicantSlice.changeStatusError(e.data));
        dispatch(messageSlice.setError(e.data.error || 'Internal Server Error'));
      },
      onSuccess: (res) => {
        dispatch(applicantSlice.changeStatusLoading(false));
        dispatch(messageSlice.setMessage(res.message));
        dispatch(applicantSlice.changeStatusSuccess(values));
      },
    });
  };
