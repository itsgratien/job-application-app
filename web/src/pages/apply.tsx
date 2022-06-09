import type { NextPage } from 'next';
import Head from 'next/head';
import style from '../styles/Home.module.scss';
import classnames from 'classnames';
import { Layout } from '@/components/Shared/Layout';
import { ApplicationForm } from '@/components/ApplicationForm/ApplicationForm';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

const Apply: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Application Form</title>
      </Head>
      <Layout>
        <div className={classnames(style.application, 'relative')}>
          <div className={classnames('flex items-center', style.title)}>
            <button
              type="button"
              className={classnames('outline-none focus:outline-none')}
              onClick={() => router.push('/')}
            >
              <Icon icon="eva:arrow-ios-back-fill" fontSize={60} />
            </button>
            <span className="font-bold">Application Form</span>
          </div>
          <div className={classnames(style.form, 'bg-white')}>
            <ApplicationForm />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Apply;
