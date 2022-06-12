import React from 'react';
import { ApplicantCollectionT } from './Applicants';

export interface DashboardHeaderPropsT {
  allowBack?: boolean;
  title?: string;
}

export interface DashboardPropsT {
  data?: ApplicantCollectionT[];
  totalItems?: number;
  error?: string;
}

export interface DashboardLayoutT extends DashboardHeaderPropsT {
  children: React.ReactNode;
}
