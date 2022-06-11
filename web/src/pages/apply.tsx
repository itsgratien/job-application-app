import type { NextPage } from 'next';
import Head from 'next/head';
import style from '../styles/Home.module.scss';
import classnames from 'classnames';
import { Layout } from '@/components/Shared/Layout';
import { ApplicationForm } from '@/components/ApplicationForm/ApplicationForm';
import { useRouter } from 'next/router';
import { GoBack } from '@/components/Shared/GoBack';
import { applyAction } from '@/redux/Actions/ApplicantActions';
import { useAppDispatch } from '@/hooks/Redux';
import { ApplicantT } from '@/generated/Applicants';

const Apply: NextPage = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleSubmit = (values: ApplicantT) => {
    dispatch(applyAction(values));
  };

  return (
    <>
      <Head>
        <title>Application Form</title>
      </Head>
      <Layout>
        <div className={classnames(style.application, 'relative')}>
          <div className={classnames('flex items-center', style.title)}>
            <GoBack handleGoBack={() => router.push('/')} />
            <span className="font-bold">Application Form</span>
          </div>
          <div className={classnames(style.form, 'bg-white')}>
            <ApplicationForm handleSubmit={handleSubmit} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Apply;
