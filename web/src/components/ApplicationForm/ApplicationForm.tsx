import React from 'react';
import { useFormik } from 'formik';
import { ApplicationSchema } from './Schema';
import { Input } from './Input';
import style from './Style.module.scss';
import classname from 'classnames';

export const ApplicationForm = () => {
  const formik = useFormik({
    validationSchema: ApplicationSchema,
    onSubmit: (e) => {},
    initialValues: { names: '', email: '', location: '', phoneNumber: '', resume: '' },
  });

  const { errors, isValid, values } = formik;

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
          />
        </div>
      </div>
      <div className={classname('flex', style.section)}>
        <div className={style.group}>
          <Input
            labelName="Resume"
            value={values.resume}
            placeholder="Your resume"
            onChange={formik.handleChange}
            type="file"
            name="resume"
          />
        </div>
      </div>
      <button
        type="submit"
        className={classname('outline-none focus:outline-none font-bold', style.submitBtn)}
      >
        Submit
      </button>
    </form>
  );
};
