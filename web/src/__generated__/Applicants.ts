import React from 'react';

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
  readonly success?: string;
}

export interface ApplicationFormPropsT {
  handleSubmit: (values: ApplicantT) => void;
}
