import React from 'react';
import { Icon } from '@iconify/react';
import style from './Style.module.scss';

export const Logo = () => {
  return (
    <div className={style.logo}>
      <Icon icon="akar-icons:react-fill" fontSize={100} />
    </div>
  );
}