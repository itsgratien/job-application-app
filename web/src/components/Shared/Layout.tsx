import React from 'react';
import classnames from 'classnames';
import style from './Style.module.scss';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={classnames(style.layout, 'relative')}>
      <div className={style.ov}>{children}</div>
    </div>
  );
};
