import type { NextPage } from 'next';
import Head from 'next/head';
import style from '../styles/Home.module.scss';
import { Logo } from '@/components/Shared/Logo';
import { Layout } from '@/components/Shared/Layout';
import classnames from 'classnames';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simple Job Application System</title>
      </Head>
      <Layout>
        <div className={classnames(style.home, 'relative')}>
          <div className={style.menu}>
            <ul className="flex justify-end">
              <li>
                <button
                  type="button"
                  className={classnames('outline-none focus:outline-none font-bold')}
                >
                  Login as HR
                </button>
              </li>
            </ul>
          </div>
          <div className={classnames('relative', style.container)}>
            <div className={classnames(style.sub, 'flex flex-col items-center justify-center')}>
              <Logo />
              <div className={style.applyDiv}>
                <button
                  type="button"
                  className={classnames(
                    'outline-none focus:outline-none bg-black text-white font-bold'
                  )}
                >
                  Apply For Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
