import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import style from '../styles/Dashboard.module.scss';
import classname from 'classnames';
import { ApplicantItem } from '@/components/Shared/Applicants/ApplicantItem';
import { apiEndPoints } from '@/utils/ApiEndPoints';
import { DashboardPropsT } from '@/generated/Dashboard';
import { setError } from '@/redux/Slices/MessageSlice';
import { useAppDispatch } from '@/hooks/Redux';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import { DashboardLayout } from '@/components/Shared/DashboardLayout';

const Dashboard: NextPage<DashboardPropsT> = ({ data, totalItems, error }) => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (error) {
      dispatch(setError(error));
    }
  }, [dispatch, error]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardLayout>
        {totalItems ? (
          <div className={classname('flex items-center', style.count)}>
            <div
              className={classname(
                style.number,
                'font-bold text-15 flex items-center justify-center'
              )}
            >
              {totalItems}
            </div>
            <div className={classname('font-bold text-15 ml-5')}>Total items</div>
          </div>
        ) : (
          <></>
        )}
        {data && (
          <>
            <div className={classname('relative w-full', style.applicantItems)}>
              {data.length > 0 ? (
                <ul>
                  {data.map((item, itemKey) => (
                    <ApplicantItem
                      key={itemKey}
                      item={item}
                      handleView={() => router.push(`/applicant/${item.slug}`)}
                    />
                  ))}
                </ul>
              ) : (
                <div className="flex items-center" style={{ marginLeft: '354px' }}>
                  <Icon icon="emojione-v1:document-with-text" fontSize={50} />
                  <span className="font-bold text-15 ml-3"> No Result Found</span>
                </div>
              )}
            </div>
          </>
        )}
      </DashboardLayout>
    </>
  );
};

export default Dashboard;

export const getStaticProps = async () => {
  try {
    const url = `${process.env.API_URL}/${apiEndPoints.applicants()}`;
    const res = await fetch(url);
    const data = await res.json();
    return {
      props: {
        data: data.data,
        totalItems: data.totalItems,
      },
    };
  } catch (error) {
    return {
      props: {
        error: 'Internal Server Error',
      },
    };
  }
};
