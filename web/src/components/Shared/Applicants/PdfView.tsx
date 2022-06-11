import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PdfViewPropsT } from '@/generated/Applicants';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
import style from './Style.module.scss';

export const PdfView = ({ url }: PdfViewPropsT) => {
  return (
    <div className={style.pdf}>
      <Document file={{ url }} className="document">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
