import React from 'react';
import { useFormik } from 'formik';
import { ApplicationSchema } from './Schema';
import { Input } from './Input';
import style from './Style.module.scss';
import classname from 'classnames';
import { applyAction } from '@/redux/Actions/ApplicantActions';
import { useAppDispatch, useAppSelector } from '@/hooks/Redux';
import { useDisableButton } from '@/hooks/UseDisableButton';
import BeatLoader from 'react-spinners/BeatLoader';
import { action } from '@/utils/ActionSetup';
import { setError, setMessage } from '@/redux/Slices/MessageSlice';
import { apiEndPoints } from '@/utils/ApiEndPoints';

export const ApplicationForm = () => {
  const dispatch = useAppDispatch();

  const selector = useAppSelector((state) => ({
    loading: state.applicantReducer.applyLoading,
    error: state.applicantReducer.applyError,
    success: state.applicantReducer.applySuccess,
  }));

  const formik = useFormik({
    validationSchema: ApplicationSchema,
    onSubmit: (values) => dispatch(applyAction(values)),
    initialValues: {
      names: '',
      email: '',
      location: '',
      phoneNumber: '',
      resume: '',
      fileName: '',
      filePlaceholder: '',
      fileLoading: false,
      resumeFile: '',
    },
  });

  const { errors, isValid, values, validateForm, resetForm } = formik;

  const { disabled } = useDisableButton({
    isValid,
    error: selector.error || false,
    loading: selector.loading,
    success: selector.success,
  });

  const handleSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      const splitFile = file.name.split('.');

      const lastIndex = splitFile.length - 1;

      const getExt = splitFile[lastIndex];

      if (getExt !== 'pdf') {
        dispatch(setError('Sorry! we only accept .pdf file'));
      } else {
        formik.setFieldValue('fileLoading', true, false);
        formik.setFieldValue('fileName', file.name, false);

        const formData = new FormData();

        formData.append('resume', file);

        await action({
          url: apiEndPoints.upload,
          method: 'POST',
          data: formData,
          contentType: 'multipart/form-data',
          onError: (e) => {
            dispatch(setError(e.data.error));

            formik.setFieldValue('fileLoading', false, false);

            formik.setFieldValue('fileName', '', false);
          },
          onSuccess: (res) => {
            dispatch(setMessage(res.message || 'Uploaded'));

            formik.setFieldValue('fileLoading', false, false);

            formik.setFieldValue('resume', res.data.path, false);

            formik.setFieldValue('filePlaceholder', res.data.message, false);
          },
          onProgress: () => {
            formik.setFieldValue('filePlaceholder', `Uploading`);
          },
        });
      }
    }
  };

  React.useEffect(() => {
    validateForm();
  }, []);

  React.useEffect(() => {
    if (selector.success) {
      resetForm();
    }
  }, [selector.success, resetForm]);

  return (
    <form action="" onSubmit={formik.handleSubmit} className={classname(style.appForm, 'relative')}>
      <div className={classname('flex', style.section)}>
        <div className={style.group}>
          <Input
            labelName="names"
            value={values.names}
            placeholder="Your name"
            onChange={formik.handleChange}
            type="text"
            name="names"
            error={errors.names}
          />
        </div>
        <div className={style.group}>
          <Input
            labelName="email"
            value={values.email}
            placeholder="Your email"
            onChange={formik.handleChange}
            type="email"
            name="email"
            error={errors.email}
          />
        </div>
      </div>
      <div className={classname('flex', style.section)}>
        <div className={style.group}>
          <Input
            labelName="location"
            value={values.location}
            placeholder="Country/Ciry"
            onChange={formik.handleChange}
            type="text"
            name="location"
            error={errors.location}
          />
        </div>
        <div className={style.group}>
          <Input
            labelName="phone Number"
            value={values.phoneNumber}
            placeholder="Your phone number"
            onChange={formik.handleChange}
            type="text"
            name="phoneNumber"
            error={errors.phoneNumber}
          />
        </div>
      </div>
      <div className={classname('flex', style.section)}>
        <div className={style.group}>
          <Input
            labelName="Resume"
            value={values.resumeFile}
            placeholder="Your resume"
            onChange={handleSelectFile}
            type="file"
            name="resumeFile"
            error={errors.resume}
            fileLoading={values.fileLoading}
            filePlaceholder={values.filePlaceholder}
          />
        </div>
        <div className={classname(style.group)}>
          <div className="mt-10 text-15">{values.fileName}</div>
        </div>
      </div>
      <button
        type="submit"
        className={classname('outline-none focus:outline-none font-bold', style.submitBtn)}
        disabled={disabled}
        style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? '0.5' : '1' }}
      >
        {selector.loading ? <BeatLoader size={15} /> : 'Submit'}
      </button>
    </form>
  );
};
