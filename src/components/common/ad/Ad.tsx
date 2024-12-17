// @ts-nocheck

import React from 'react';
import { Txt, Video, Image } from 'components';
import { AdvertiseTypes, FnType } from 'types';

interface Props {
  type: keyof typeof AdvertiseTypes;
  className?: string;
  src: string;
  height: string;
  width: string;
  isShowControls?: boolean;
  poster?: string;
  alt?: string;
  objectFit: 'contain' | 'fill' | 'cover';
  onClick: FnType;
  name?: string;
}

export default function Ad(props: Props) {
  const {
    type,
    alt,
    src,
    height,
    width,
    isShowControls,
    poster,
    objectFit,
    className = '',
    onClick,
    ...restProps
  } = props;

  const HandleType = () => {
    switch (type) {
      case 'img':
        return (
          <Image
            className={'pointer shadow-sm ' + className}
            radius="s"
            alt={alt}
            src={src}
            height={height}
            width={width}
            objectFit={objectFit}
            onClick={onClick}
            {...restProps}
          />
        );
      case 'video':
        return (
          <>
            <Video
              className={className}
              type="video/mp4"
              poster={poster}
              isShowControls={isShowControls}
              src={src}
              height={height}
              width={width}
              objectFit={objectFit}
            />
          </>
        );
      default:
        return <Txt>محل تبلیغات</Txt>;
    }
  };

  return <HandleType />;
}
