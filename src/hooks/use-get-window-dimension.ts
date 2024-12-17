// @flow
import { useEffect, useState } from 'react';

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<{ width: number; height: number } | null>(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const getWindowDimensions = () => {
  if (typeof window === 'object') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  return null;
};
