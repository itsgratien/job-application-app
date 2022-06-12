import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import style from '../../styles/Dashboard.module.scss';
import classname from 'classnames';
import {
  ApplicantCollectionT,
  ApplicationDetailPropsT,
  ApplicationDetailParamsT,
} from '@/generated/Applicants';
import { Details } from '@/components/Shared/Applicants/Details';
import { PdfView } from '@/components/Shared/Applicants/PdfView';
import { apiEndPoints } from '@/utils/ApiEndPoints';
import Loading from 'react-spinners/RingLoader';
import { DashboardLayout } from '@/components/Shared/DashboardLayout';

const ApplicantDetail: NextPage<ApplicationDetailPropsT> = ({ data }) => {
  if (!data) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{data.names}</title>
      </Head>
      <DashboardLayout allowBack title="Application detail">
        <div className={classname('relative', style.applicationDetails)}>
          <div className={style.data}>
            <Details item={data} modify />
          </div>
          <div className={style.resume}>
            <PdfView url={data.resume} />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ApplicantDetail;

export const getStaticPaths = async () => {
  const url = `${process.env.API_URL}/${apiEndPoints.applicants()}`;
  const res = await fetch(url);
  const data = await res.json();
  const paths = data.data.map((item: ApplicantCollectionT) => ({ params: { slug: item.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as ApplicationDetailParamsT;
  const url = `${process.env.API_URL}/${apiEndPoints.applicationDetail(slug)}`;

  const res = await fetch(url);

  const { data } = await res.json();

  return {
    props: {
      data,
    },
  };
};
