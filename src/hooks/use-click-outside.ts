import { useEffect } from 'react';

interface ArgsType {
  targetID: string;
  isRunning: boolean;
  runOnUpdate?: Function;
  cb?: Function;
}

export default function useClickOutside(args: ArgsType): void {
  const { targetID, isRunning, runOnUpdate, cb } = args;

  useEffect(() => {
    runOnUpdate?.();

    if (isRunning) {
      document.addEventListener('click', handleClick);
      document.addEventListener('ontouchstart', handleClick);
    }

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('ontouchstart', handleClick);
    };
  }, [isRunning]);

  const handleClick = (e) => {
    if (!e.target.closest('#' + targetID)) cb?.();
  };
}
