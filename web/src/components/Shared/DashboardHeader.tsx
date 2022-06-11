import React from 'react';
import classname from 'classnames';
import style from './Style.module.scss';
import { GoBack } from './GoBack';
import { DashboardHeaderPropsT } from '@/generated/Dashboard';
import { useRouter } from 'next/router';

export const DashboardHeader = ({ allowBack, title }: DashboardHeaderPropsT) => {
  const router = useRouter();

  return (
    <div className={classname('relative', style.header)}>
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
