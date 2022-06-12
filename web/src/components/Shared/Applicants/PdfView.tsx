import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PdfViewPropsT } from '@/generated/Applicants';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
import style from './Style.module.scss';
import RingLoader from 'react-spinners/RingLoader';
import classname from 'classnames';
import { Icon } from '@iconify/react';

export const PdfView = ({ url, fullDetail }: PdfViewPropsT) => {
  return (
    <div className={classname('relative', style.pdf)}>
      {fullDetail && (
        <button
          type="button"
          className={classname(
            'outline-none focus:outline-none absolute flex items-center justify-center',
            style.expandPdf
          )}
          onClick={() => window.open(url, '__blank')}
        >
          <Icon icon="bx:expand-alt" color="white" fontSize={20} />
        </button>
      )}
      <Document
        file={{ url }}
        className="document"
        loading={
          <div className="flex items-center justify-center w-full" style={{ height: '154px' }}>
            <RingLoader />
          </div>
        }
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
