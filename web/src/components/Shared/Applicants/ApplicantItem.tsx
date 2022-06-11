import React from 'react';
import style from './Style.module.scss';
import { ApplicantItemPropsT } from '@/generated/Applicants';
import { Document, Page, pdfjs } from 'react-pdf';
import { Details } from './Details';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

export const ApplicantItem = ({ item, handleView }: ApplicantItemPropsT) => {
  return (
    <li className={style.applicantItem}>
      <div className={style.resume}>
        <div className={style.pdf}>
          <Document file={{ url: item.resume }} className="document">
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
      <div className={style.details}>
        <Details item={item} />
      </div>
    </li>
  );
};
