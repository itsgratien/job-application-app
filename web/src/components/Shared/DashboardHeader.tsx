import React from 'react';
import classname from 'classnames';
import style from './Style.module.scss';
import { GoBack } from './GoBack';
import { DashboardHeaderPropsT } from '@/generated/Dashboard';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/Redux';

export const DashboardHeader = ({ allowBack, title }: DashboardHeaderPropsT) => {
  const router = useRouter();

  const selector = useAppSelector((state) => ({ scroll: state.applicantReducer.scroll }));

  return (
    <div
      className={classname('relative', style.header)}
      style={{ background: selector.scroll ? 'white' : 'none', paddingTop: selector.scroll ? '20px': 0 }}
    >
      <ul>
        <li className="flex items-center">
          {allowBack && <GoBack handleGoBack={() => router.back()} />}
          <span className={classname('font-bold text-25')}>{title || 'Applicants'}</span>
        </li>
        <li>
          <button
            type="button"
            className={classname(
              'outline-none focus:outline-none font-bold text-15',
              style.logoutBtn
            )}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
