export const apiEndPoints = {
  apply: '/apply',
  applicationDetail: (slug: string) => `/applicants/${slug}`,
  upload: '/upload',
  applicants: () => '/applicants',
  changeStatus: (slug: string) => `/applicants/${slug}`,
};
