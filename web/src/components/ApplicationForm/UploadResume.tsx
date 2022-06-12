import React from 'react';
import { Input } from './Input';
import style from './Style.module.scss';
import classname from 'classnames';
import { UploadResumePropsT } from '@/generated/Applicants';
import { useAppDispatch } from '@/hooks/Redux';
import { setError, setMessage } from '@/redux/Slices/MessageSlice';
import { action } from '@/utils/ActionSetup';
import { apiEndPoints } from '@/utils/ApiEndPoints';
import { setUploadSuccess } from '@/redux/Slices/ApplicantSlice';

export const UploadResume = ({ values, errors, formik }: UploadResumePropsT) => {
  const dispatch = useAppDispatch();

  const handleSelectFile = React.useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setUploadSuccess(undefined));

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

          return action({
            url: apiEndPoints.upload,
            method: 'POST',
            data: formData,
            contentType: 'multipart/form-data',
            onError: (e) => {
              dispatch(setError(e.data.error || 'Unable To Upload Due To Internal Server Error'));

              formik.setFieldValue('fileLoading', false, false);

              formik.setFieldValue('fileName', '', false);

              dispatch(setUploadSuccess(undefined));
            },
            onSuccess: (res) => {
              dispatch(setMessage(res.message || 'Uploaded'));

              formik.setFieldValue('fileLoading', false, false);

              formik.setFieldValue('resume', res.data.path, true);

              formik.setFieldValue('filePlaceholder', res.message, true);

              dispatch(setUploadSuccess(res.data.path));
            },
            onProgress: () => {
              formik.setFieldValue('filePlaceholder', `Uploading`);
            },
          });
        }
      }
    },
    [dispatch, formik]
  );

  return (
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
  );
};
