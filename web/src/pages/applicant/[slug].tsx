import type { NextPage } from 'next';
import Head from 'next/head';
import style from '../../styles/Dashboard.module.scss';
import { Layout } from '@/components/Shared/Layout';
import classname from 'classnames';
import { DashboardHeader } from '@/components/Shared/DashboardHeader';
import { ApplicationStatusEnum } from '@/generated/Applicants';
import { Details } from '@/components/Shared/Applicants/Details';
import { PdfView } from '@/components/Shared/Applicants/PdfView';

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
                <div className={style.resume}>
                  <PdfView url={'https://gratien.vercel.app/resume.pdf'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ApplicantDetail;
