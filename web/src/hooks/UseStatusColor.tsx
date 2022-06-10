import React from 'react';
import { UseStatusColorPropsT, ApplicationStatusEnum } from '@/generated/Applicants';

export const useStatusColor = ({ status }: UseStatusColorPropsT) => {
  const [color, setColor] = React.useState<string>('#ddd');

  React.useEffect(() => {
    switch (status) {
      case ApplicationStatusEnum.Dropped:
        setColor('red');
        break;
      case ApplicationStatusEnum.Passed:
        setColor('#FAFF00');
        break;
      default:
        setColor('#ddd');
    }
  }, [status]);

  return { color };
};
