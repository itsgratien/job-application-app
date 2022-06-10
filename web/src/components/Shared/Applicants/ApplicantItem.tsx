import React from 'react';
import classname from 'classnames';
import style from './Style.module.scss';
import { ApplicantItemPropsT, ApplicationStatusEnum } from '@/generated/Applicants';
import { Icon } from '@iconify/react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useStatusColor } from '@/hooks/UseStatusColor';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

export const ApplicantItem = ({ item, handleView }: ApplicantItemPropsT) => {
  const { color } = useStatusColor({ status: item.status || ApplicationStatusEnum.New });

  return (
    <li className={style.applicantItem}>
      <div className={style.resume}>
        <div className={style.pdf}>
          <Document file={{ url: item.resume }} className="document">
            <Page pageNumber={1}/>
            </Document>
        </div>
      </div>
      <div className={style.details}>
        <div className={classname('font-bold text-20')}>{item.names}</div>
        <div
          className={classname('absolute flex items-center justify-center', style.status)}
          style={{ backgroundColor: color }}
        >
          {item.status || ApplicationStatusEnum.New}
        </div>
        <div className={classname('flex items-center', style.info)}>
          <Icon icon="uil:voicemail-rectangle" fontSize={15} color="black" />
          <span className="ml-2">{item.email}</span>
        </div>
        <div className={classname('flex items-center', style.info)}>
          <Icon icon="ion:location-sharp" fontSize={15} color="black" />
          <span className="ml-2">{item.location}</span>
        </div>
      </div>
    </li>
  );
};
