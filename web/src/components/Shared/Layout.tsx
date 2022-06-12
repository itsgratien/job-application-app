import React from 'react';
import classnames from 'classnames';
import style from './Style.module.scss';
import { LayoutPropsT } from '@/generated/Applicants';
import { useAppSelector } from '@/hooks/Redux';

export const Layout = ({ children }: LayoutPropsT) => {
  const selector = useAppSelector((state) => ({ scroll: state.applicantReducer.scroll }));

  return (
    <div className={classnames(style.layout, 'relative')}>
      <div className={style.ov} style={{ paddingTop: selector.scroll ? '0' : '40px' }}>
        {children}
      </div>
    </div>
  );
};
