import type { NextPage } from 'next';
import Head from 'next/head';
import style from '../styles/Home.module.scss';
import classnames from 'classnames';
import { Layout } from '@/components/Shared/Layout';
import { ApplicationForm } from '@/components/ApplicationForm/ApplicationForm';

const Apply: NextPage = () => {
  return (
    <>
      <Head>
        <title>Application Form</title>
      </Head>
      <Layout>
        <div className={classnames(style.application, 'relative')}>
          <div className={style.title}>
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
