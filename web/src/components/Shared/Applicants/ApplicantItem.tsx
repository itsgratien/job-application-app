import React from 'react';
import style from './Style.module.scss';
import { ApplicantItemPropsT } from '@/generated/Applicants';
import { Details } from './Details';
import { PdfView } from './PdfView';

export const ApplicantItem = ({ item, handleView }: ApplicantItemPropsT) => {
  return (
    <li className={style.applicantItem} onClick={handleView}>
      <div className={style.resume}>
        <div className={style.pdf}>
          <PdfView url={item.resume} />
        </div>
      </div>
      <div className={style.details}>
        <Details item={item} />
      </div>
    </li>
  );
};
