import React from 'react';
import style from './Style.module.scss';
import { Layout } from './Layout';
import { DashboardHeader } from './DashboardHeader';
import classname from 'classnames';
import { DashboardLayoutT } from '@/generated/Dashboard';
import { setScroll } from '@/redux/Slices/ApplicantSlice';
import { useAppDispatch } from '@/hooks/Redux';

export const DashboardLayout = ({ children, allowBack, title }: DashboardLayoutT) => {
  const dispatch = useAppDispatch();

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop } = e.target as any;

    if (scrollTop > 150) {
      dispatch(setScroll(true));
    } else {
      dispatch(setScroll(false));
    }
  };

  React.useEffect(() => {
    dispatch(setScroll(false));
  }, [dispatch])

  return (
    <Layout>
      <DashboardHeader allowBack={allowBack} title={title} />
      <div className={classname('fixed inset-0', style.dashboard)} onScroll={handleScroll}>
        <div className={style.container}>
          <div className={style.applicants}>{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardLayout;
