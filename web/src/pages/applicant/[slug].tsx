import type { NextPage } from 'next';
import Head from 'next/head';
import style from '../../styles/Dashboard.module.scss';
import { Layout } from '@/components/Shared/Layout';
import classname from 'classnames';
import { DashboardHeader } from '@/components/Shared/DashboardHeader';
import { ApplicantItem } from '@/components/Shared/Applicants/ApplicantItem';
import { ApplicationStatusEnum } from '@/generated/Applicants';
import { Status } from '@/components/Shared/Applicants/Status';
import { Details } from '@/components/Shared/Applicants/Details';

const ApplicantDetail: NextPage = () => {
  return (
    <>
      <Head>
        <title>Applicant</title>
      </Head>
      <Layout>
        <DashboardHeader allowBack title="Application detail" />
        <div className={classname('fixed inset-0', style.dashboard)}>
          <div className={style.container}>
            <div className={style.applicants}>
              <div className={classname('relative', style.applicationDetails)}>
                <div className={style.data}>
                  <Details
                    item={{
                      names: 'John Doe',
                      email: 'johndoe@gmail.com',
                      location: 'Rwanda/Kigali',
                      phoneNumber: '+250786601003',
                      resume: 'https://resume.com',
                      status: ApplicationStatusEnum.Passed,
                    }}
                    modify
                  />
                              </div>
                              <div className={style.resume}></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ApplicantDetail;
