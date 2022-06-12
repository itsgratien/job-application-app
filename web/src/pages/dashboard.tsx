import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import style from '../styles/Dashboard.module.scss';
import { Layout } from '@/components/Shared/Layout';
import classname from 'classnames';
import { DashboardHeader } from '@/components/Shared/DashboardHeader';
import { ApplicantItem } from '@/components/Shared/Applicants/ApplicantItem';
import { apiEndPoints } from '@/utils/ApiEndPoints';
import { DashboardPropsT } from '@/generated/Dashboard';
import { setError } from '@/redux/Slices/MessageSlice';
import { useAppDispatch } from '@/hooks/Redux';
import { useRouter } from 'next/router';

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
      <Layout>
        <DashboardHeader />
        <div className={classname('fixed inset-0', style.dashboard)}>
          <div className={style.container}>
            <div className={style.applicants}>
              {totalItems && (
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
                      <div className="font-bold text-20">Not Result Found</div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Layout>
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
