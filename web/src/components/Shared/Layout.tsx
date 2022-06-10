import React from 'react';
import classnames from 'classnames';
import style from './Style.module.scss';
import { LayoutPropsT } from '@/generated/Applicants';

export const Layout = ({ children }: LayoutPropsT) => {
  return (
    <div className={classnames(style.layout, 'relative')}>
      <div className={style.ov}>{children}</div>
    </div>
  );
};
