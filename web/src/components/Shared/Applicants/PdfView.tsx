import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PdfViewPropsT } from '@/generated/Applicants';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
import style from './Style.module.scss';
import RingLoader from 'react-spinners/RingLoader';

export const PdfView = ({ url }: PdfViewPropsT) => {
  return (
    <div className={style.pdf}>
      <Document
        file={{ url }}
        className="document"
        loading={
          <div className="flex items-center justify-center w-full" style={{height: '154px'}}>
            <RingLoader />
          </div>
        }
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
