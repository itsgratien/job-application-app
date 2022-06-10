import type { NextPage } from 'next';
import Head from 'next/head';
import style from '../styles/Dashboard.module.scss';
import { Layout } from '@/components/Shared/Layout';
import classname from 'classnames';
import { DashboardHeader } from '@/components/Shared/DashboardHeader';
import { ApplicantItem } from '@/components/Shared/Applicants/ApplicantItem';
import { ApplicationStatusEnum } from '@/generated/Applicants';

const Dashboard: NextPage = () => {
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
              <div className={classname('flex items-center', style.count)}>
                <div
                  className={classname(
                    style.number,
                    'font-bold text-15 flex items-center justify-center'
                  )}
                >
                  200
                </div>
                <div className={classname('font-bold text-15 ml-5')}>Total items</div>
              </div>
              <div className={classname('relative w-full', style.applicantItems)}>
                <ul>
                  <ApplicantItem
                    item={{
                      names: 'John Doe',
                      email: 'johndoe@gmail.com',
                      phoneNumber: '+250786601005',
                      location: 'Rwanda/Kigali',
                      resume: 'https://gratien.vercel.app/resume.pdf',
                    }}
                    handleView={() => ''}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
