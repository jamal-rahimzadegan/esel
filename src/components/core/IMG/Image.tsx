import { useRef } from 'react';
import { IMG_PATH } from 'constant';
import { ObjectFit } from 'types';
import { ImgStyle } from './ImgStyle';

interface ImgProps {
  src: string;
  alt: string;
  height: string | number;
  width: string | number;
  className?: string;
  radius?: string;
  onClick?: Function;
  objectFit?: ObjectFit;
}

export default function Image(props: ImgProps): JSX.Element {
  const { src, alt, className = '', objectFit, radius = null, ...resProps } = props;
  const imgRef = useRef();

  const handleLoadErr = ({ target }) => {
    target.onerror = null;
    target.src = IMG_PATH + 'nopicture.jpg';
  };

  return (
    <ImgStyle
      ref={imgRef}
      loading="lazy"
      src={src}
      objectFit={objectFit}
      radius={radius}
      className={className}
      alt={alt}
      onError={handleLoadErr}
      {...resProps}
    />
  );
}
