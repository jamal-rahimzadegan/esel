import { useRef, useEffect } from 'react';

export const usePrevValue = (varToCheck: any): any => {
  const refForData = useRef<any>(null);

  useEffect(() => {
    refForData.current = varToCheck;
  }, [varToCheck]);

  return refForData.current;
};
