import React from 'react';
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
import { setApplicationDetail } from '@/redux/Slices/ApplicantSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/Redux';
import { changeApplicationStatusAction } from '@/redux/Actions/ApplicantActions';

const ApplicantDetail: NextPage<ApplicationDetailPropsT> = ({ data }) => {
  const dispatch = useAppDispatch();

  const selector = useAppSelector((state) => ({
    application: state.applicantReducer.applicationDetail,
    changeSuccess: state.applicantReducer.changeStatusSuccess,
    message: state.messageReducer.message,
  }));

  const { application } = selector;

  const handleChangeStatus = (status: string) => {
    if (application) {
      dispatch(changeApplicationStatusAction({ status, slug: application.slug }));
    }
  };

  React.useEffect(() => {
    if (data) {
      dispatch(setApplicationDetail(data));
    }
  }, [data, dispatch]);

  if (!application || !data) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{application.names}</title>
      </Head>
      <DashboardLayout allowBack title="Application detail">
        <div className={classname('relative', style.applicationDetails)}>
          <div className={style.data}>
            <Details
              item={application}
              modify
              message={selector.message}
              handleChangeStatus={handleChangeStatus}
              changeStatusSuccess={selector.changeSuccess}
            />
          </div>
          <div className={style.resume}>
            <PdfView url={application.resume} />
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
