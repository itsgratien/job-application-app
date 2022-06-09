import type { NextPage } from 'next';
import Head from 'next/head';
import style from '../styles/Dashboard.module.scss';
import { Layout } from '@/components/Shared/Layout';
import classname from 'classnames';

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simple Job Application System</title>
      </Head>
      <Layout>
        <div className={style.header}>
          <ul>
            <li>
              <span>Applicants</span>
            </li>
            <li>
              <button type='button'>Logout</button>
            </li>
          </ul>
        </div>
        <div className={classname(style.dashboard)}>
          <div className={classname(style.showcase)}></div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
