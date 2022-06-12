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
import { UploadResume } from './UploadResume';

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
      <UploadResume values={values} errors={errors} formik={formik} />
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
