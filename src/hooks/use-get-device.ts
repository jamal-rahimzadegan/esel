import { useEffect, useState } from 'react';
import { REGEX } from 'constant';
import { ComplexObject } from 'types';

export default function useGetDevice(): ComplexObject {
  const [isMobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const userDevice = navigator?.userAgent;
    const mobile = Boolean(userDevice.match(REGEX.IS_MOBILE_DEVICE));
    setMobile(mobile);
  }, []);

  return { isMobile };
}
