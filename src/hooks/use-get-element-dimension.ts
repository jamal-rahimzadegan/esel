import { useCallback, useEffect, useState } from 'react';

export default function useGetElementDimension(
  elementId: string,
  type: string = 'width',
  defaultWidth: number = 200,
  defaultHeight: number = 0
): object {
  const [widthDimension, setWidthDimension] = useState<number>(defaultWidth);
  const [heightDimension, setHeightDimension] = useState<number>(defaultHeight);

  const getElementDimension = useCallback(() => {
    switch (type) {
      case 'width':
        setWidthDimension(document.getElementById(elementId).offsetWidth);
        break;
      case 'height':
        setHeightDimension(document.getElementById(elementId).offsetHeight);
        break;
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    setWidthDimension(document.getElementById(elementId).offsetWidth);
    window.addEventListener('resize', getElementDimension);
    return () => window.removeEventListener('resize', getElementDimension);
  }, []);

  return { widthDimension, heightDimension };
}
