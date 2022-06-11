import React from 'react';
import classname from 'classnames';
import style from './Style.module.scss';
import { ApplicationStatusEnum, ApplicationDetailPropsT } from '@/generated/Applicants';
import { Status } from './Status';
import { Icon } from '@iconify/react';

export const Details = ({ item, modify }: ApplicationDetailPropsT) => {
  const spanStyles = modify
    ? {
        fontSize: '13px',
        fontWeight: 'bold',
      }
    : { fontSize: '12px', fontWeight: 'normal' };

  const infoStyles = modify ? { marginLeft: '0px', marginTop: '2px' } : { marginLeft: '10px' };

  const statusStyles = modify ? { top: 0, right: '0' } : { top: '48px', right: '70px' };

  return (
    <div className={style.applicationDetails}>
      <div className={classname('font-bold text-20')}>{item.names}</div>
      <div className={classname('absolute')} style={statusStyles}>
        <Status status={item.status || ApplicationStatusEnum.New} />
      </div>
      <div className={classname('flex items-center')} style={infoStyles}>
        <Icon icon="uil:voicemail-rectangle" fontSize={15} color="black" />
        <span className="ml-2" style={spanStyles}>
          {item.email}
        </span>
      </div>
      <div className={classname('flex items-center')} style={infoStyles}>
        <Icon icon="ion:location-sharp" fontSize={15} color="black" />
        <span className="ml-2" style={spanStyles}>
          {item.location}
        </span>
      </div>
    </div>
  );
};
