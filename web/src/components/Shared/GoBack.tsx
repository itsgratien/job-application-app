import React from 'react';
import { Icon } from '@iconify/react';
import classname from 'classnames';
import { GoBackPropsT } from '@/generated/Applicants';

export const GoBack = ({ handleGoBack }: GoBackPropsT) => {
  return (
    <button
      type="button"
      className={classname('outline-none focus:outline-none mt-1')}
      onClick={handleGoBack}
    >
      <Icon icon="eva:arrow-ios-back-fill" fontSize={50} />
    </button>
  );
};
