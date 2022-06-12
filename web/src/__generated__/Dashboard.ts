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
