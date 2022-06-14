import React from 'react';
import { setError, setMessage } from '@/redux/Slices/MessageSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/Redux';
import toast, { Toaster } from 'react-hot-toast';

export const Message = () => {
  const selector = useAppSelector((state) => state.messageReducer);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (selector.message) {
      toast.success(selector.message);
      setTimeout(() => {
        dispatch(setMessage(undefined));
      }, 1000);
    }
  }, [selector.message, dispatch]);

  React.useEffect(() => {
    if (selector.error) {
      toast.error(selector.error);
      setTimeout(() => {
        dispatch(setError(undefined));
      }, 1000);
    }
  }, [selector.error, dispatch]);

  return (
    <>
      <Toaster
        toastOptions={{
          style: { fontSize: '14px', padding: '20px 30px', fontWeight: 'bold' },
          success: { style: { background: '#FAFF00' } },
          error: { style: { background: '#ff0f0f', color: 'white' } },
        }}
      />
    </>
  );
};
