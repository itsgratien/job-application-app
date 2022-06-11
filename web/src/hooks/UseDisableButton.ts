import React from 'react';
import { UseDisablePropsT } from '@/generated/Applicants';

export const useDisableButton = ({ isValid, error, loading, success }: UseDisablePropsT) => {
  const [disabled, setDisabled] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (isValid || error || success) {
      setDisabled(false);
    }

    if (!isValid) {
      setDisabled(true);
    }

    if (loading) {
      setDisabled(true);
    }
  }, [isValid, loading, error, success]);

  return {
    disabled,
  };
};
