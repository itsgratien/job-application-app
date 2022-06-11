import React from 'react';
import classname from 'classnames';
import style from './Style.module.scss';
import { useStatusColor } from '@/hooks/UseStatusColor';
import { ApplicationStatusEnum, ApplicationStatusPropsT } from '@/generated/Applicants';

export const Status = ({ status }: ApplicationStatusPropsT) => {
  const { color } = useStatusColor({ status: status as ApplicationStatusEnum });
  return (
    <div
      className={classname('flex justify-center items-center', style.applicationStatus)}
      style={{ backgroundColor: color }}
    >
      {status || ApplicationStatusEnum.New}
    </div>
  );
};
