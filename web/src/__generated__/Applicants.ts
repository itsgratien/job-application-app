import React from 'react';
import { FormikProps } from 'formik';
import { Document } from 'mongodb';

export enum ApplicationStatusEnum {
  Passed = 'Passed',
  Dropped = 'Dropped',
  New = 'New',
}

export interface ApplicantT {
  names: string;
  email: string;
  phoneNumber: string;
  location: string;
  resume: string;
  status?: ApplicationStatusEnum;
}

export interface ApplicantItemPropsT {
  item: ApplicantT;
  handleView?: () => void;
}

export interface InputPropsT {
  type?: 'text' | 'email' | 'number' | 'file';
  labelName: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error?: string;
  filePlaceholder?: string;
  fileLoading?: boolean;
}

export interface GoBackPropsT {
  handleGoBack?: () => void;
}

export interface LayoutPropsT {
  children: React.ReactNode;
}

export interface UseStatusColorPropsT {
  status: ApplicationStatusEnum;
}

export interface ApplicationStatusPropsT {
  status: string;
}

export interface ApplicationDetailPropsT {
  item: ApplicantT;
  modify?: boolean;
}

export interface PdfViewPropsT {
  url: string;
}

export interface ApplicantInitialStateT {
  readonly applyLoading?: boolean;
  readonly applySuccess?: boolean;
  readonly applyError?: any;
}

export interface MessageInitialStateT {
  readonly error?: string;
  readonly message?: string;
}

export interface UseDisablePropsT {
  isValid: boolean;
  loading?: boolean;
  error?: boolean;
  success?: boolean;
}

export interface UploadResponseT {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  path: string;
  size: number;
  filename: string;
}

export interface UploadResumePropsT {
  values: {
    resume: string;
    fileLoading?: boolean;
    filePlaceholder?: string;
    fileName?: string;
    resumeFile?: any;
  };
  errors: {
    resume?: string;
  };
  formik: FormikProps<any>;
}

export interface ApplicantCollectionT extends Document, ApplicantT {
  slug: string;
  createdAt: number;
  updatedAt: number;
}
