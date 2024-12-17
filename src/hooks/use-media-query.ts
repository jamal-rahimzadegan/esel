import { useState, useCallback, useEffect } from 'react';

type BreakType = 'max-width' | 'min-width';
type NumberedBreakPoints = 320 | 480 | 768 | 1024 | 1200;

export default function useMediaQuery(type: BreakType = 'min-width', size: NumberedBreakPoints = 768): boolean {
  const [isBreaks, setBreak] = useState<boolean>(false);

  const updateTarget = useCallback((e) => {
    e.matches ? setBreak(true) : setBreak(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(${type}: ${size}px)`);
    media.addListener(updateTarget);

    if (media.matches) setBreak(true);

    return () => media.removeListener(updateTarget);
  }, []);

  return isBreaks;
}
